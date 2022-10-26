import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import StyledPeekViewport from "components/system/Taskbar/TaskbarEntry/Peek/StyledPeekViewport";
import RndWindow from "components/system/Window/RndWindow";
import StyledWindow from "components/system/Window/StyledWindow";
import Titlebar from "components/system/Window/Titlebar";
import useFocusable from "components/system/Window/useFocusable";
import useWindowTransitions from "components/system/Window/useWindowTransitions";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { useCallback, useMemo } from "react";

const Window: FC<ComponentProcessProps> = ({ children, id }) => {
  const {
    linkElement,
    processes: { [id]: process },
  } = useProcesses(); // useProcess 나중에 보기
  const { background, peekElement } = process || {}; // background컬러, element ref 내용
  const { foregroundId } = useSession(); // useSession 나중에 보기
  const isForeground = id === foregroundId; // useSession 나중에 보기
  const { zIndex, ...focusableProps } = useFocusable(id); //
  const windowTransitions = useWindowTransitions(id);
  const linkViewportEntry = useCallback(
    (viewportEntry: HTMLDivElement) =>
      process &&
      !peekElement &&
      viewportEntry &&
      linkElement(id, "peekElement", viewportEntry),
    [id, linkElement, peekElement, process]
  );
  const style = useMemo<React.CSSProperties>(
    () => ({ background }),
    [background]
  );

  return (
    <RndWindow id={id} zIndex={zIndex}>
      <StyledWindow
        $foreground={isForeground}
        style={style}
        {...focusableProps}
        {...windowTransitions}
      >
        <StyledPeekViewport ref={linkViewportEntry}>
          <Titlebar id={id} />

          {children}
        </StyledPeekViewport>
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
