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
}

export class BucketConstants {
    public static PROFILE_VERIFICATION_URL = 'https://famelinks-dev.s3.ap-south-1.amazonaws.com/profile-images/';
};
