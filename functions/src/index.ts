import {PubSub} from "@google-cloud/pubsub";
import * as functions from "firebase-functions";

const topicName = "NEW_USER";
const topic = (new PubSub()).topic(topicName);

/**
 * Publishes a message with the user data to the given Pub/Sub topic.
 */
exports.publishNewUser = functions.auth.user().onCreate(async (user) => {
  // Create a message with the user data
  const messageObject = {
    data: {
      message: user,
    },
  };
  const messageBuffer = Buffer.from(JSON.stringify(messageObject), "utf8");

  functions.logger.log("Attempting to publish message:", messageBuffer);

  // Publish the message
  try {
    await topic.publish(messageBuffer);
    functions.logger.log("Message published.");
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
});
