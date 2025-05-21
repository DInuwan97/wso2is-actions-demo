# wso2is-actions-demo

#### Steps to configure

clone the `wso2is-actions-demo` to your local repository.
```
git clone https://github.com/DInuwan97/wso2is-actions-demo.git
```
Execute the following command from the root directory of `wso2is-actions-demo`
```
npm install
```
Once the packages are installed execute the following
```
npm run dev
```
Start the WSO2 IS 7.1.0 and set the pre-update-password action as mentioned in the [documentation](https://is.docs.wso2.com/en/next/guides/service-extensions/pre-flow-extensions/pre-update-password-action/).

Give a proper name to the action and configure the endpoint as follows
```
http://localhost:5000/api/utils/password
```

1. Since this is a demo to understand how actions are working no need to configure the authentication and password sharing format. Hence keep the password sharing format as `Plain Text`
2. No need to define any rules.
3. Save the action and try the flow by resetting a user password.
