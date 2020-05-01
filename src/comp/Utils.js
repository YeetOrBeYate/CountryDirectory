import {notification} from "antd"

export const loadCountriesNotif = ()=>{

    return notification.open({
        message: 'Connection interupted',
        description:
          'The content you are requesting cannot be reached. Try again later',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
}



