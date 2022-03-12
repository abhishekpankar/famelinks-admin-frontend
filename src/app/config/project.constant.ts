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
    public static BLOCK_USER = 'users/blockedUser';
    public static SEND_MAIL = 'users/sendMail';


    //notification routes
    public static SEND_NOTIFICATION = 'notification/sendNotification';
    public static GET_NOTIFICATION = 'notification/getNotification';

    //Upload Route
    public static UPLOAD_MUSIC = 'musicMedia/uploadMusicMedia';
  
    //Music route
    public static GET_MUSIC_LIST = 'musicMedia/getMusicMediaList';
    public static CREATE_MUSIC_DOCUMENT = 'musicMedia/createMusicMediaDocument';

    //Report Route
    public static GET_REPORT_LIST = 'report';

     //Improvement suggestiond Route
     public static GET_IMPROVEMENT_SUGGESTIONS_LIST = 'users/feadback/';

}

export class BucketConstants {
    public static PROFILE_VERIFICATION_URL = 'https://famelinks-dev.s3.ap-south-1.amazonaws.com/profile-images/';
};
