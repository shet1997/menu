import React, { Component } from 'react';
import menu from '../menu.json';
import menuOption from '../menuOption.json';


class MenuList extends Component {
    state = { 
        data: menu
     }

          
     handleClick = values => {  
        const menus = menu;
        if(values === "All") {
            this.setState({
                data: menu
            });
        } else {
          const filterdData =  menus.filter(filterdItem =>  filterdItem.category === values);
          console.log(filterdData)
          this.setState({
              data: filterdData
          });
        } 
     }

    render() { 
        const menuTime = menuOption;
        return ( 
            <React.Fragment>
                <div className="d-flex justify-content-center">
                    <h2 className="heading">Our Menu</h2>
                </div>
                <div className="d-flex justify-content-center menu_type_wrapper">
                    {menuTime.map(timings => (
                        <div className="menu_type" key={timings.id} onClick={() => this.handleClick(timings.value)}>{timings.name}</div>
                    ))}
                </div> 
                <div className="row">
                    {this.state.data.map(item => (
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
         );
    }
}
 
export default MenuList;