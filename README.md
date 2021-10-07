# publish_new_user_data_firebase_extension

On Firebase user creation, publish user data to a given PubSub topic.

The published messages will be consumed by another service such as: [on_user_creation_microservice](https://github.com/Adventures-In/on_user_creation_microservice).

The topic is "NEW_USER".

See also: [How to connect a Cloud Function to a Dart microservice with Pub/Sub](https://reference-material.notion.site/How-to-connect-a-Cloud-Function-to-a-Dart-microservice-with-Pub-Sub-e3ef54cbdd324d1f83c3673ddd157c26)

## Using the extension

### Setup 

Clone this repo into a separate directory from your project (so we don't confuse the firebase tool) and update `PROJECT_NAME` in `.firebaserc` to your Firebase project name. Then deploy:

```sh
cd publish_new_user_data_firebase_extension/functions
npm install
firebase deploy
```

## Future Work 
- Super easy installation and configuration via a console tool, see:
  - [Firebase Extensions](https://firebase.google.com/products/extensions)
  - [functions-framework-dart/dartfn/](https://github.com/GoogleCloudPlatform/functions-framework-dart/tree/main/dartfn)
- Publish messages on deletion events
