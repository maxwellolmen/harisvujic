
import {AppState} from "../types/appTypes"

export function generateErrorMessage(hooks:AppState, payloadData:any){
        if (payloadData.returnCode !== 0){
            hooks.errorPackage[1](true);
        }
        if (!payloadData.returnCode) {
          // do nothing
        } else if (payloadData.returnCode === 1) {
          hooks.errorMessagePackage[1]("Account already exists!");
        } else if (payloadData.returnCode === 2) {
          hooks.errorMessagePackage[1]("Invalid Username");
    
          console.log("ERROR MESSAGE TWO");
        } else if (payloadData.returnCode == 3) {
          hooks.errorMessagePackage[1]("Server Error");
        } else if (payloadData.returnCode == 4) {
          hooks.errorMessagePackage[1]("Invalid Username or Password");
        } else if (payloadData.returnCode === 5) {
          hooks.errorMessagePackage[1]("Lobby already exists with that name.");
    
        } else if (payloadData.returnCode === 6) {
          hooks.errorMessagePackage[1]("Lobby is already full.");
    
        } else if (payloadData.returnCode === 7) {
          hooks.errorMessagePackage[1]("Lobby doesn't exist.");
    
        } else if (payloadData.returnCode === 8) {
          hooks.errorMessagePackage[1]("Invalid password.");
        }
}