# publish_new_user_data_firebase_extension

On Firebase user creation, publish user data to a given PubSub topic.

The published messages will be consumed by another service such as: [on_user_creation_microservice](https://github.com/Adventures-In/on_user_creation_microservice)

## Setup 
- edit `.firebaserc` to add the relevant project name
- edit `index.ts` to add the relevant topic name 

## Deploy 
- run `firebase deploy --only functions`