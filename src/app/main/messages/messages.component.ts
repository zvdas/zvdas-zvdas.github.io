import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  constructor() {
    /*
    (async () => {
      // DSChatSDK construction accepts two parameters:
      // 1. Chat Room Id
      // 2. ID of the iFrame tag
      // 3. Dead Simple Chat Public API Key.
      const sdk = new DSChatSDK("7VIhmjiqM", "chat-frame", "public_api_key")
      // Call the connect method to connect the SDK to the Chat iFrame.
      await sdk.connect();
    });
    */
  }

  ngOnInit(): void {
  }

  /**
   * Listening to Message Event.
   * This is triggered Each Time a message arrives in the chat room
   */
  /*
  sdk.on("message", (message) => {
    console.log("New Message Arrived", message);
  });
  */

  /**
   * Calling the Join Method to Join the Chat Room
   */
  /*
  sdk.join({
      username: "John"
  });
  */

  /**
   * Sending a message in the chat room.
   */
  /*
  sdk.sendMessage("Hello World");
  */

}
