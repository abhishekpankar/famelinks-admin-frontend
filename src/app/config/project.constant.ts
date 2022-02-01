export class AppConstant {
    public static PRE_APP_TITLE = 'Fame-Link';
    public static POST_APP_TITLE = 'Admin';
};

export class ApiCollection {

    // category routes

    public static GET_CATERGORY = 'challenges/getChallengesData';

    public static UPDATE_CATERGORY = 'challenges/updateChallenges';

    public static CREATE_CATERGORY = 'challenges/addNewChallenges';
    
    public static DELETE_CATERGORY = 'challenges/deleteChallenges';

    //users routes
    public static GET_USRS = 'users/getUsers';
    
    public static VERIFY_USRS ='users/updateUserProfileVerification';

    //notification routes
    public static SEND_NOTIFICATION = 'notification/sendNotification';
    public static GET_NOTIFICATION = 'notification/getNotification';

}

export class BucketConstants {
    public static PROFILE_VERIFICATION_URL = 'https://famelinks-dev.s3.ap-south-1.amazonaws.com/profile-images/';
};
