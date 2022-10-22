import { RouteAxios } from '_utils/services/urlAxios';
import { AuthService } from '_utils/services/authService';


class AlertService{
                /*ADD SERVICE*/
    SendAlert(longitude, latitude, id_Utilisateur, id_Type){
        return RouteAxios.post('/alert', {
            longitude, latitude, id_Utilisateur, id_Type
        }, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJOdW1iZXIiOiIwMzQ1NjQ4NDI1IiwiaWF0IjoxNjY2NDQ3MDM4LCJleHAiOjE2NjY1MzM0Mzh9.4ltZdBlssLK64mY_1Y9ET_c7CeIko9IVypWUQG-kOis`
            }
        }
        )
    }
    SendHelp(longitude, latitude, id_Utilisateur, id_Type){
        return RouteAxios.post('/alert', {
            longitude, latitude, id_Utilisateur, id_Type
        }, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJOdW1iZXIiOiIwMzQ1NjQ4NDI1IiwiaWF0IjoxNjY2NDQ3MDM4LCJleHAiOjE2NjY1MzM0Mzh9.4ltZdBlssLK64mY_1Y9ET_c7CeIko9IVypWUQG-kOis`
            }
        }
        )
    }

}

export default new AlertService();
