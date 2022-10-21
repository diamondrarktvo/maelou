import { RouteAxios } from '_utils/services/urlAxios';
import { AuthService } from '_utils/services/authService';


class AlertService{
                /*ADD SERVICE*/
    SendAlert(longitude, latitude, id_Utilisateur){
        return RouteAxios.post('/alert', {
            longitude, latitude, id_Utilisateur
        }, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOdW1iZXIiOiIwMzQ1NjQ4NDI1IiwiaWF0IjoxNjY2MzkyNDgyLCJleHAiOjE2NjY0Nzg4ODJ9.cW6cr0IOZTytParQFySRau1FDhEqRoIgPo_7isvMbWY`
            }
        }
        )
    }
    SendHelp(longitude, latitude, id_Utilisateur){
        return RouteAxios.post('/alert', {
            longitude, latitude, id_Utilisateur
        }, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOdW1iZXIiOiIwMzQ1NjQ4NDI1IiwiaWF0IjoxNjY2MzkyNDgyLCJleHAiOjE2NjY0Nzg4ODJ9.cW6cr0IOZTytParQFySRau1FDhEqRoIgPo_7isvMbWY`
            }
        }
        )
    }

}

export default new AlertService();
