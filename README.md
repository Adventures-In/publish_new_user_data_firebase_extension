# publish_new_user_data_firebase_extension

On Firebase user creation, publish user data to a given PubSub topic.

The published messages will be consumed by another service such as: [on_user_creation_microservice](https://github.com/Adventures-In/on_user_creation_microservice)

## Using the extension

### Setup 
- edit `.firebaserc` to add the relevant project name
- edit `index.ts` to add the relevant topic name 

### Deploy 
- run `firebase deploy --only functions`

## Future Work 
- Super easy installation and configuration via a console tool, see:
  - [Firebase Extensions](https://firebase.google.com/products/extensions)
  - [functions-framework-dart/dartfn/](https://github.com/GoogleCloudPlatform/functions-framework-dart/tree/main/dartfn)
