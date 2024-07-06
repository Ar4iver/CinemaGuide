import { getAuthData } from "./model/selectors/getIsAuthUser/getIsAuthUser";
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { fetchProfile } from './model/services/fetchProfile/fetchProfile'
import { deleteFavoriteMovieById } from './model/services/deleteFavoriteMovieById/deleteFavoriteMovieById'


/**selectors */
export { getAuthData, getProfileData }

/**services */
export { fetchProfile, deleteFavoriteMovieById }