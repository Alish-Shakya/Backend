import { Router } from "express";
import {
  deleteMessage,
  messageCreated,
  singleMessage,
  updateMessage,
} from "../Controller/messageController.js";

const createMessage = Router();

createMessage.route("/createdMessage").post(messageCreated);

createMessage.route("/singleMessage/:id").get(singleMessage);
createMessage.route("/updateMessage/:id").patch(updateMessage);
createMessage.route("/deleteMessage/:id").delete(deleteMessage);
export default createMessage;
