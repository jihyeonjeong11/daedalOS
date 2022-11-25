import type { ApiError } from "browserfs/dist/node/core/api_error";
import type { SortBy } from "components/system/Files/FileManager/useSortBy";
import { useFileSystem } from "contexts/fileSystem";
import type {
  ClockSource,
  IconPositions,
  SessionContextState,
  SessionData,
  SortOrders,
  WallpaperFit,
  WindowStates,
} from "contexts/session/types";
import defaultSession from "public/session.json";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ThemeName } from "styles/themes";
import { DEFAULT_THEME, SESSION_FILE } from "utils/constants";

const DEFAULT_SESSION = (defaultSession || {}) as unknown as SessionData;

const useSessionContextState = (): SessionContextState => {
  const { deletePath, readFile, rootFs, writeFile, lstat } = useFileSystem();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [foregroundId, setForegroundId] = useState("");
  const [stackOrder, setStackOrder] = useState<string[]>([]);
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME);
  const [clockSource, setClockSource] = useState<ClockSource>("local");
  const [windowStates, setWindowStates] = useState<WindowStates>(
    Object.create(null) as WindowStates
  );
  const [sortOrders, setSortOrders] = useState<SortOrders>(
    Object.create(null) as SortOrders
  );
  const [iconPositions, setIconPositions] = useState<IconPositions>(
    Object.create(null) as IconPositions
  );
  const [wallpaperFit, setWallpaperFit] = useState<WallpaperFit>("fill");
  const [wallpaperImage, setWallpaperImage] = useState("VANTA");
  const [runHistory, setRunHistory] = useState<string[]>([]);
  const prependToStack = useCallback(
    (id: string) =>
      setStackOrder((currentStackOrder) =>
        currentStackOrder[0] === id
          ? currentStackOrder
          : [id, ...currentStackOrder.filter((stackId) => stackId !== id)]
      ),
    []
  );
  const removeFromStack = useCallback(
    (id: string) =>
      setStackOrder((currentStackOrder) =>
        currentStackOrder.filter((stackId) => stackId !== id)
      ),
    []
  );
  const setWallpaper = useCallback(
    (image: string, fit?: WallpaperFit): void => {
      if (fit) setWallpaperFit(fit);
      setWallpaperImage(image);
    },
    []
  );
  const [haltSession, setHaltSession] = useState(false);
  const setSortOrder = useCallback(
    (
      directory: string,
      order: string[] | ((currentSortOrder: string[]) => string[]),
      sortBy?: SortBy,
      ascending?: boolean
    ): void =>
      setSortOrders((currentSortOrder = {}) => {
        const [currentOrder, currentSortBy, currentAscending] =
          currentSortOrder[directory] || [];
        const newOrder =
          typeof order === "function" ? order(currentOrder) : order;

        return {
          ...currentSortOrder,
          [directory]: [
            newOrder,
            sortBy ?? currentSortBy,
            ascending ?? currentAscending,
          ],
        };
      }),
    []
  );
  const initializedSession = useRef(false);

  useEffect(() => {
    console.log(windowStates);
  }, [setWindowStates]);

  useEffect(() => {
    if (sessionLoaded && !haltSession) {
      writeFile(
        SESSION_FILE,
        JSON.stringify({
          clockSource,
          iconPositions,
          runHistory,
          sortOrders,
          themeName,
          wallpaperFit,
          wallpaperImage,
          windowStates,
        }),
        true
      );
    }
  }, [
    clockSource,
    haltSession,
    iconPositions,
    runHistory,
    sessionLoaded,
    sortOrders,
    themeName,
    wallpaperFit,
    wallpaperImage,
    windowStates,
    writeFile,
  ]);

  useEffect(() => {
    if (rootFs) {
      const initSession = async (): Promise<void> => {
        if (initializedSession.current) return;

        initializedSession.current = true;

        try {
          let session = {} as SessionData;

          try {
            session =
              (await lstat(SESSION_FILE)).blocks <= 0
                ? DEFAULT_SESSION
                : (JSON.parse(
                    (await readFile(SESSION_FILE)).toString()
                  ) as SessionData);
          } catch {
            session = DEFAULT_SESSION;
          }

          if (session.clockSource) setClockSource(session.clockSource);
          if (session.themeName) setThemeName(session.themeName);
          if (session.wallpaperImage) {
            setWallpaper(session.wallpaperImage, session.wallpaperFit);
          }
          if (
            session.sortOrders &&
            Object.keys(session.sortOrders).length > 0
          ) {
            setSortOrders(session.sortOrders);
          }
          if (
            session.iconPositions &&
            Object.keys(session.iconPositions).length > 0
          ) {
            setIconPositions(session.iconPositions);
          }
          if (
            session.windowStates &&
            Object.keys(session.windowStates).length > 0
          ) {
            setWindowStates(session.windowStates);
          }
          if (session.runHistory && session.runHistory.length > 0) {
            setRunHistory(session.runHistory);
          }
        } catch (error) {
          if ((error as ApiError)?.code === "ENOENT") {
            deletePath(SESSION_FILE);
          }
        }

        setSessionLoaded(true);
      };

      initSession();
    }
  }, [deletePath, lstat, readFile, rootFs, setWallpaper]);

  return {
    clockSource,
    foregroundId,
    iconPositions,
    prependToStack,
    removeFromStack,
    runHistory,
    sessionLoaded,
    setClockSource,
    setForegroundId,
    setHaltSession,
    setIconPositions,
    setRunHistory,
    setSortOrder,
    setThemeName,
    setWallpaper,
    setWindowStates,
    sortOrders,
    stackOrder,
    themeName,
    wallpaperFit,
    wallpaperImage,
    windowStates,
  };
};

export default useSessionContextState;
