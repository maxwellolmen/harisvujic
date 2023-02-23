import { MFCInfo } from "./HarisInfo";
import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
} from "react";
export interface AppState {
  gameInfo: MFCInfo;
  setGameInfo: [MFCInfo, Dispatch<SetStateAction<MFCInfo>>];
  message: string;
  setMessage: [string, Dispatch<SetStateAction<string>>];
  sender: string;
  setSender: [string, Dispatch<SetStateAction<string>>];
  receiver: string;
  setReceiver: [string, Dispatch<SetStateAction<string>>];
  namePackage: [string, Dispatch<SetStateAction<string>>];
  keyPackage: [string, Dispatch<SetStateAction<string>>];
  usernamePackage: [string, Dispatch<SetStateAction<string>>];
  passwordPackage: [string, Dispatch<SetStateAction<string>>];
  returnCodePackage: [number, Dispatch<SetStateAction<number>>];
  screenPackage: [string, Dispatch<SetStateAction<string>>];
  errorPackage: [boolean, Dispatch<SetStateAction<boolean>>];
  errorMessagePackage: [string, Dispatch<SetStateAction<string>>];

}
