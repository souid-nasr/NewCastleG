import React, { useState } from 'react';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next'
import CustomizedDialogs from './Dialog';


export const Navigation = (props) => {

  const { t, i18n } = useTranslation()

  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true")
      }
    }
  }, [])

  return (
    <>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1' >
            <ul className='nav navbar-nav navbar-right'>

              <li className="btn-signin">
                <CustomizedDialogs />
              </li>

              <li>
                <div class="lang-menu">
                  <div class="selected-lang">
                   <h6><i class="fa fa-globe" aria-hidden="true"></i></h6>
                  </div>
                  <ul>
                  
                    <li>
                      <a  class="en">English</a>
                    </li>
                    <li>
                      <a  class="fr">French</a>
                    </li>
                    <li>
                      <a  class="ar">Arabic</a>
                    </li>
                  </ul>

                </div>
                
              </li>

            </ul>

          </div>
        </div>


      </nav>

    </>
  );
};

