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

export const countryNotFound = ()=>{

  return notification.open({
      message: 'Country not found',
      description:
        'Please check spelling',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
}

export const codeNotFound = ()=>{

  return notification.open({
      message: 'Code:400',
      description:
        'Something is wrong with the URL please refer to the drop down search bar for a valid option',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
}



