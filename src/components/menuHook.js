import React, { useState, useEffect } from 'react';
import menu from '../menu.json';
import menuOption from '../menuOption.json';


function MenuHook() {
    const [menudata, setMenudata] = useState([]);
    const [menutime, setMenutime] = useState([]);

    useEffect(() => {
        const menus = menu;
        const menuOptions = menuOption;
        setMenudata(menus);
        setMenutime(menuOptions);
      }, []);

      const handleClick = values => {  
        const menus = menu;
        if(values === "All") {
            setMenudata(menus);
        } else {
          const filterdData =  menus.filter(filterdItem =>  filterdItem.category === values);
          setMenudata(filterdData);
        } 
     }

    return (
        <div>
             <React.Fragment>
                <div className="d-flex justify-content-center">
                    <h2 className="heading">Our Menu</h2>
                </div>
                <div className="d-flex justify-content-center menu_type_wrapper">
                    {menutime.map(timings => (
                        <div className="menu_type" key={timings.id} onClick={() => handleClick(timings.value)}>{timings.name}</div>
                    ))}
                </div> 
                <div className="row">
                    {menudata.map(item => (
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 main_menu_wrapper" key={item.id}>
                            <div className="d-flex">
                            <div className="">
                                <img src={item.img} alt={item.title} className="food_img"/>
                            </div>
                            <div className="title_desc">
                                <div className="d-flex food_title">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="food_price">
                                        $ {item.price}
                                    </div>
                                </div>
                                <div className="desc">
                                     {item.desc}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </React.Fragment>
        </div>
    );
}

export default MenuHook;

