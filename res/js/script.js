let title = document.querySelector('.title');
let stick_nav = document.querySelector('#stick-nav');
let gallery_modal = document.querySelector("#gallery-model");
let modal_header = document.querySelector('.modal-header');
let gallery_img = document.querySelector('#gallery-img');
let social_link = document.querySelector(".social-links");
let current_year = document.querySelector('#current-year');

let titles = [
    "Computer Scientist ",
    "Computer Engineer ",
    "Python Developer ",
    "Competitive Programmer ",
    "Web Developer ",
];
let gallery = {
    'certificates': [
        "https://lh3.googleusercontent.com/O-PrfYAPZ-HiB9kkxNTvRugLXqFse7iLHvo5Rdg_Jgt7WSiOEDBr-cEoh1zq0bGlxYKR8pAOxIZs_J-c5yET6myp1dLM99hddt4H04NPgxiSZ1SBqRF63P648W6-3fixtjKQ-sBnPV8EmijmInDYtj9UNsYqYhi-QFW9Zxt3vVpcIud07Fn0_RFpIb9iv390_-gPEAB9LienIXNQLy6zZL9P39wdilMvigb4uhQDT0WJ3uyldD3VliedWpUEQRPAq75t5FUDSG9VZUaRXRp2eH_RKcGv7x3E2l6suy7_lTvNk_I3tkJHtMJ4OyLxmsBGJ7fHhEoeTknrAVktrTSCWblHwKDUicLU_CFsFeiHPl5fDHLg27ytBaybzUDGWGAg-3nixZnyBAHBr3OFvUGRmc71UOv4nsIrQI3e3B2jH0ul6P7oSSCa9g6FF5p-pb0hdUW2zldcCPx1zzU4a91GgEBdtqkDGfKlu3bEZSn3SeR8rYOckv43906YaqHkgXa4YJ0iNjxSyVZU573XGxrcM0JeMqNUqr-f68J9fhQnzd8nnoUOGLYzbEm8DL4k-TOCkJjc6iszU88x6KSAw0tNhj-ZF5YOdo1DkT73CPKKggw7btQPO5FqBMRM3cyniy6_vHzdVAeAB8lTcZw_wIhhUWdlQrbPor4TUjUrJM9d2EVp17RmSv--8Azz3l8EdfNDD-q6ez9HXOjvHt-5Kh6ZOjg7=w657-h472-no?authuser=0",
        "https://lh3.googleusercontent.com/ikYFN-Q7LBCK4guVrEQsthTo0vGJdRx5nLaMZDDLNTLdUV3e3JKLuEElbiURCjHB4NsrcM9HnykEa5LbU1n0W1ad3ASPfTi8amxRh5YQedIQzKHtUvjo8NwAcx0H_lWBvbmvQ7gT0FAuRoKFW7y9WiMcWZDN6kh6YTqudjl33kGxFlxQ7xF6nPg_I2dEXlBDtK3dfJVThWkFYns5ufbT_3_Kn3uKnt6AY9W7GlNL17xsao4MEJkUF7ZhTWacGO5jX8fjBwtOQ0lZUF0OLeBNJFNNk29CX9RSPQPcpY7LpFkmrBn446EXRkVrgVqoMooElAEbt2gZcixo5SIgu61bbLFDQsw9VVar3p7IJBM7CpJDUAqmgNi2acieL7o_XXyafy4jd5XNQgOqaL0hDPdYj9XiQdhAy-qJiQxQFCuduBeHPyujOKcnb1VSJkx_GGE-epF3BdtneKSSriXNl68jHOCRXSIaUe8gcgEkBzvaZ3EbkGGmWAAldlkSfrdiu2C04kk3sMWuKV4VvGQoM2TkM_TSEIjNL9OaKJhdmVkh75J9ukrAqn4QtwwVQ_pCD7HhGUNL7TwBqhuQ_6u7ayC7a12Z9v164VCTENNcznEebO0aLQY2EfOjawMIh80Ug0HGAM5JDUB_-evLSgJmd3gfWhu5EpEIGRn_qYQbPuv6tqZWhogI35uYfUTEZvMbdK6Tlu0q9CYRwoTBtJ7Gpt5OYbl_=w669-h478-no?authuser=0",
        "https://lh3.googleusercontent.com/752tiuPFQ_G9GHxxq3HajmsGwW2kosrRhdK_hhmTMKKeqPHBXKHFU-TcSsU3RpISF_17iW3zJQdGn8NUpoDuLz7E3nsctlKVsWsrojeaI5FZu76DxB0xxbriOOZl3CgWqf7Qc7jyorkWcR27fFdyCv7ECp2UXQAPkM1s2ZD9lxTFcUirNACatcHNVehbH9Eva74lc3TcEaHOdR4mrDiWaV_PM1hzu3l20DD_yUcUJYGLIQm665jJRaKDoJ9cWwjBNC5y90AXCHr8dMTGKq916-CL_n59xdGKHaiROgU343T5sNDMH6AFBu-bMTTpqYUy6RpXwQvCYAJ6DX_exZqbxriynn5l6f-9z04dypna0Qo3sggn3ZE1beYPjtpJu7TytfC743ePMXKkG_gX3rJRSCyz0VPty41jIFWdIof2XE5xoopcdNS5Z1Hk_WH1PCih82J9kcRe4qy1YZTptwILA0bgk5thmKTrDeHfCg-En44zgOERON2bboDqvtCxy6f6EfCPYStHjfXbvJyNPz21aczMdWBzqBv-5w5RUHxrroiYHVuwKEZiLVpIjLm-CaBgZ0Q3ignZiMdaeuwiA9l2ppGQvqrIu1uRcv4eZAE99UP7VOxBJl5EknSB-kz_axfUroD80N2rIfab4qTLESLc04VdHX1sPjffsNP8I-_JM56CyA_v1-eczwOAKsZjUPX85v4874ql6HrpoFtvwlSzdODZ=w313-h216-no?authuser=0",
        "https://lh3.googleusercontent.com/6lhFM9TU9oFGuXn2ys2dGE6hh6iNeukEG6paW4XpNUYWxzpY_Eelxzdy0Dp03WgXhQ6N9V_mc9lFObU44cbx66uNcUMOpnZTNCNyDYcASfn8_4nUcq6AGnf3JhpgO5VsLhvxisN7S6oI7UofzNFfe25nD86m6z-DpLs1JvCr_Exj_9H-iZ3w4TNd_GAmu2LYduX0VnNfdws4mGlsRbvYRyxqzoAnr3UKnVFfSv27g5xZ5wrg9TxepOz_dECmOT3fGpTv-J_eNVKqprYhiM_aHbxj8_qo66uE_DqH32I7qUwCAOYi7SUE9xVHMTZhyTZS81hWkODIrZRp37K6Ycdtu1JEAr35WGJVJIQ_7TZfWxVsrgQgwk1NGHyzKafCgSPnvB00qkhWIERQozlBXN_-ZN4914CEDWW02ETTyTyA8vVFVQlZDQsPwSY4NPG1J_tVhLmqLX6Us3g3kKYbpiXUICeZSlNsmGQu9vcwTWwq9Q0yzhUd5irLWH6F75MEXS3P9UimYyPWG06NW14Rah-w6E4PWgyRG32RiRlfRNvToV2j5LY_RfUfg12R4vL43mW7SZ_Fl0aiujQMuMtDUqNMXIZPLPSw0Ic8lR64vbfNmeWrqjs1-BYBWm3k5dnic_PLyC5B7YjaoNYK48-X4IPn3iJJRMD-qqqI9N5g2fTOf6GQPY41i8bDE9AYf8hUZ0h2PRYDxosEO2svUDqltYjAwi0T=w647-h466-no?authuser=0",
        "https://lh3.googleusercontent.com/1b5RaXVRXBqsJzjT7FhZlY7KWZx7JGLuHbfM5bFgQ2R_MIA5J1TlTj1fwKX50-8_DbE96rWf5r5caCNAGsIkLzWxhZEUywSJevQfXrmTXMCwKUoP3yvTR5WoFdJESckU2w0SgpJpoGDe2yz2FFXYZsLX4hv_BuiPsXJiduFslwsfqV5LJZhQYq0wsiwkbFFyT4zHg-tyyKQQ2o01AmIPLHIaNX-56MgSiMgD3t0_2XbNnEXspYW8T0k0HG6meL5jk3AewRubx_QgeIqz6tIkEPOx9oe0cueqg9Cv8GsXBHwk6lQEGpkc1uelnDHyHcy0Jfl4LDf0TtikC10mi-br-ycFtVd26vzyau7waVSMhk2P0m0QOuO3yiB0gtL7PDUixqWOQ22SXnxlqeLy09Z7N_y2SI0yOQqEOKWRweUIJkcMTIiRHxucmgx4rrwsXeCcs0XUaLfy8XaJ2N6TM5l3PcoYzFDerkWbcOXcy3CbUSA3QUCmw7bQksTgxZfqRSq-DBvN4pr14z0KMfZionhUa9QqqjNdPScO-ZfmRGks0TTH454Lb8bGo7ZUbQo1sQu1JvE7vLmfe66xg9ngRJg7NYDEEnHnWDK87iFXWMvD_fH6x2zivirpa6aDRVC1mMy2Wj-yiya5ogBRIoHiWkSZF1MHvmH03D76Oit5jRbxhRwjWDZ4veplxNTqmxuxdsX4XEzULprXo6YKNSxa4BECr9m3=w304-h215-no?authuser=0",
        "https://www.sololearn.com/Certificate/1089-14099900/jpg",
    ],
    'profiles': [
        "https://lh3.googleusercontent.com/pw/AM-JKLVdo8jkU-vilg4y1gJW7Biu6ri5cTB4XUNjyy78i0u-Q879yDtyWNOAFOgj9bXxMZOw14PIpe35P1ezpUOoBCErYPGWPclqRcb0FoC2Tn-I0hIl0tPfq81klOy2Uyzo2HqZV_KzMzXrCkJDmUtR9BVq=w1094-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AM-JKLXTQ0XQShX4JKtlsFheaQDPwAbOOXhr26ljLQX1BkIM1YwFWbx-AwLKmrE7XbsynELf98UwBImrKSv-APtZ138S4ddnA1QqulkUuGOyOOqA0SAxF_pNFB5qA8lLYTiNl6cqHF9m6O-lprhX4uBK16mV=w1094-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AM-JKLXVFcWuSEOvjS29P5HEikeDyNENXrL_eKcZUq4Ad82zFC5ZWSD5PxHLnSx8euUZM6IXAJMhjIQ998erRGnVdH0hcamDeBKsXxVW14_tY_bjs1HW62azeWv86BZv_s-8Y3txjHRziPTDJ49fKBlSiP4i=w1094-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AM-JKLWDF3aPZl_6FdyayEjZ4tDLGNpvPQTm2GznbVbizvxU2jhwvfrG98f7L-YIHMmlXYbuRYdn3pLbgldQ64A22tNxWCOWGYhV8SoeaEKl5JIt8prvM6tiOBkUM2y11cFhVqZ3Vjgppx1F7zzB96IDqR82=w1094-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/X5RJqxi-PtO9p24yt5qjnfJ-ByIureN24gv6YnliQr4QWtJF69-okosEEgOp7IzMYdzs3G0M_yRt9dksNyHskLXK_dl8EOkJEGWq5655EaTB9exJ9yF65yn64ynVWZLpUkqnr3lXQ3NG2fndT9QBxrDHHF4hBKW-P8GYHLNl4ttncOLbu6l977kHEZLFSrff5e8myfwXRfHQOH9tUzrCIx68_f0Y-KL7QMf_H_6EhMYt32m4T_2htVMUUkaVZSIKN46udnvSBC1jTM9TdCFGfxVdYSOkhzkjwem-qbrJkDWDMMK6kRvLdljCTiM_DuMqi6EoCIC2gBFw_Qv37of-gVK7tJGlW0LQgnUaVRXDJM6es79ADx-yBhGWos7oUMDFMJkbxS7mCalNzZ3iV4h4Ecigbie110qqVew2uQTItvAMMUGVb-Skx2nRxl8fb6BbD0hTXkWDet2TEGuJlFX1-DWYsQKH8QFkW3BZdbLSy600wxQ83JxRdcucY_DBwNdHiv1xgXOIH017llj-M8XIKDOGmkE_HYgZuzw3u5W1GkzjZlgFPzrPsRD_GpyyYKo1XeGktI22QJWrl85-I9jvanE-aT5_tcHvKEQo5lElHNYuH7RQcURMgHwf-TY5dae_mxO8Fd9LDS2z3ZMRRGips8ZD36uqmHzMSTIY2WClA7tSSpeyQ2nFWy8TtMwRexDcDNt11lDo6C7YelUPfO7wZmCX=w801-h671-no?authuser=0",
        "https://lh3.googleusercontent.com/FiIxESpdJxYRMAVohDCYI3ojhOCq2oDcN4igzYOlT-SAzBxsCrBroFH3TL9CE3OPGSqfJkvVOvJ9N3QACTexjATxncPGyDpPFI3aXQibNyBKLFexhmKqCqYPWBUgbzZpAJE8UJ18SlQ6FM6tltYgKS9E535CGi9OnlY7JmbEaESXXUmrkRx7GNCnHPj-hRbcluwMFEFvROKh4gM2otzi0ihJ6817Ii88Yq6WEx0Oq0LWOCGmxg8I9UX0co6NUBkb9VgLJ-K_xPzO4n40GAL2Ry3APaM-C8_xKGp9pLLEYkeIxTnKaFSA36xehAUseC3IGs5-Cdi8Pt5P-PyVssILyRe3IR7jxRSuS4HZELtWUd2ulPRd_T1IyHSQnQWM3UWLZ96Ow5szs2EfaT6GkTkCSe8HcDBGl8PwyCdyMa3X_aZ-Bw0EpIm4P2kp0pJcpUOH4KfDtjBpNdtK4_vYlQmgwCOF7cV-uED_k9ImSqq6TfDA7Rrc8U4QO9YfeEZExb5CCsjgA5YgBupkBxc_74quCseE5aMHhsX0EKehPlfTe2SS0Xth1DUjZDAPSt43BKI09Vp3Wbm1Uy12umPc-6y4x4gYtZG4Hl_AYK3uw1e6jUv-_8edVqgFUJ9cvVFYTAhKOSBzxmaG5Xtc5pZmYEjVdh7uU_X9pn9N_Y2UJRhdZCnXIIY1iE7UiY4tttR9velf7oyWR_Dl1HQZPhin00oSWmYy=w1007-h671-no?authuser=0",
        "https://lh3.googleusercontent.com/5kNLj1VSglH2NKgoYdYQgQVzF_DRbjSx3u094_Hhb0YBRXPTNBOnAqiEJX0Bx44jNib0a3JUUYgjQhkB0WPUoYnNfWlCkWpMQAJGr9uWjbu8vMn8eS_46bD5QQFAfpiDbEbIiqItTuHCisY13mN1WMBQk1NUJEnBNAyHoP3nWdBiXn1T0ov_bjKiuf-GBryMDs_blllWA-mmYpRKG-SrrMGR--583GEUVaTooipHiHFXV4txm2JruZKqh8a4xrPFxJZpIgSEnEAXxlBY9saKjpjQ355S-GH_k7-H-CFwoAYahnADPURgr42_Gw7f1rUBjXcS5ID8cxYGHc3EHxg3xejbfChiE_hYAZIhYrN5yFgTOXYy7qAk-6iGxdEAnVMMhPEmdAmBomWDa9fr2dJ38NYRbXigWa2behOFiTKjuBPAGtKmgMYskVw3M4WmFmqZ1sGtRLBBi_zhm15hnxWRF3xE0BPJu2_t9Naoyy1M7rNDZoVa6oAMEuzZr-nRT29PeeoDGFDSx_bKuNTccHnUpMkjhkVe6Gbi8t2aXQwuvwofJ1bj05fxenZTQMr8xEUgPBk8zO-8RW2Bloy8jOvw9ChPSjeK1-O7C69osDXUoQL2XUi5ERk4E27DJbP7izxN3n61zMo1rYsG-rL2pfr7lOlc9fkxwCPVzQzLTCj3BzwuBW9olpc3VZoTHHHVeZQCHthyd4mH01X7Vl_NJZHrnqkw=w972-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/4KUMrq4lajZF6vh7sdTONPdpnguRJla9fmUq9bPRZDCdHWMcDWtfeGVBiMeqICSOuDD4wzrnUixX4VG0I4KNpwLJb22qRj0K_vI3s-Ps_dbnjD-lIowldm4n1wtrPzG0AQu_L3mekxyRqGOJ0GqHZzzevvy5dQxhJOiKz6_0lY1pLx133cp65MX-PS9zJJBK5Z1bZbg1UChxGAO13wpBe_sz9bzO0Db1jsxA-tG-KByGzId8FjWgOaPq3YLbQiHu3WYpCXSPLVomF5oPcqNHeedzIBwqKEO4o9bF-E_ClgIagIdb8qV2Bob0YlSG3JzjuNWkR8W4u5Ffu7VP6bPOfA6QlD29fmpdAb7FUPzE93qIQSy9ciGOgFGHo3bCa0SX4Su7lWPTPDlPfDdkfmnlG2oBCuYKD2Aw_1jysTCwEBqbsh9u5zsvmw1r6MfTYoDgIBs_Y-F9ZSjoBRv0Pm0r7cgD-LWlz-UrsHHVhlEroJD-mpgRTUco7iRs4lAoq690FvWChTbEvsn6tRenn2Ny20BK_MpfqYA6w_N1gt2YV-Xs2JR-EDmFLuytCseUFdzetDuDUZYSqJ59jziSBWrGLasAt7j9Zr7LKrHOdd2X9j-qVvg_Tb2fpcxBxCj7_QQQK5093a6ywAyihIyVanEXgBy7HjGvO_g03PYLbRmUFr_M8PHIZToP4VlYzgN4lFRq95mIzoCqmnmk1HQ4vXFr4h8E=w1094-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/kEwVF5UyT75rnbrkOodJNmUT9dUIshe1E7EC2ABegBpC6BznYpex4N8aTpERCbE4UEQ_e-QnNfudigTzrFvmJUMTLxurNCwla_tjDwgf5ZZdg_ppg2e71eYwvGxyl2lC2PeoOmxCg0ZcRWU1pz4AGRdWpjUtsXNI5Mm5BEBWfQxSuce9217VY76Jt3vRqF6vWqPTaD0Uc3LipxgJmQM-PuDA4ZJiR353c46FGeEO3rH6byEIcK5ft47ELcs2loPvyhp6eNBB9crCVdDz-duxTuKu36Lx0vH4UBbst2qIjj1Lh7ghY8qymvPShChjTelQQT3YnjfyV5mpRzYQVWHYfBYnhLoGwEJNvKO-MN1tkn4eMZ4PzLqaVyBLQqaHO7l_rIkfPSXBSeAegQQe5FgCzX3w7zS_mJff55onE-tSmZSB1ufeZtWAP7mKZ0tVacGKUvaRV3TKbTxPDc-RVPh3_R1Ig0dlnbKY4JV0DJvTYcjqoycI-SphYqeAynxzXNpg2XFqrUlbUprMZQQvs3HvzKQ0EAPJO19-fYkq47YQR_a6B0DWL4xpDFhvP3Xuy0_4X_1hQ6ktgYWaLMZfuz4sWEuiSAZ6tNoT-q8tgAmQtQzx5fzebmB9CHFdujdL7tvQRU-S1yggoTRUwryFCNCmRlpasliLH1ovksInyPgNx5gvXWLwQS01UXSHfqsvngyvH0u-yfKfnna5Y54dVV-_opIn=w302-h227-no?authuser=0",
        "https://lh3.googleusercontent.com/B-yd5wv82J-LW7WVCQ4s8PkaG6J4It9fu5Wns3WG4FRluyfiPoxeCoD5BY9vqjU2c59Fq7YGCpe-9M2hFqdNMmwq0mb1NLivpwo26R26OhDeHAw51xD8Zo5eK15vBp2R644_pEXQ094uWFQF8BA7UP2Yi8ZeKmWk3X4OkMOyuZndGY1dsMau4AHSqW8OPFhygiJCJI4uoFqvwOJNMyzkAx-_Qe3QwoiwKnA-cGPUNL2eWC_XsTGx75sHbahMiaLZkARP1KHRslNZipuP4o1mfpHAe7JCAqXKG7Hb7yY05Ifceiiaes7XagsbmEdmOrEB6bnPQ5XTLrbdeTxA9a4R4vCixwLbP9Zw8Xd3fVXs-azgnFK7wgs1OUKS05b7EFbJUDZdQ2zixYDZUQIBHM5CLl2C9b_-A4RjhP-W1RdrKA_vTv-ZvjqtspZhlCNnoBaTeMHrG0oBjcNgUnJ7x7WJEt-CJTxoujL80Uvcae3zlkCOIJUegs7X-cnzPf8iFKr3HyqN3yljStvw_a2XJgEf9o_lQGz-lioDoCH5Kp4AdxR9RXW3gII7qyO2oMDyeYDlkNM6W9Kic7I6eYpQ3RKEYVZm_OjcmQlTcFVEDpdSafwQJPnFfacin6D9F3eQ97Xyro3FKcxu9yrQ-PtG8-eh0ywyeN3v6WRzLOx6t3uZq8lT7ML99NHJMGBqWFkgFxNbGxbhdyisYzBjZoSrEX_Gunp4=w1193-h671-no?authuser=0",
        "https://lh3.googleusercontent.com/YLhEYlhjn_ew02ThyhtlcolMPh8lXkDHTN3AEwRNS2tJXARl38_BvazD_bYUbuqCMB_lgQT6iJKO4oDlsASkNJ6N68qCxTlWoBZDKiby04LEk4A36h-ghH3ZXE8Pnbo3SFhSkEJzP0jg5MB7CG6aEomeDmT7wYKkL1joiY-4AvMWmGIDBvA_GB3sErFhEazerFoppB8EGYosjYQhYrSpzwb6GJqn1uoB216_TWTxAmEIVIo5HyzThik8n12u4CdMSJL5D-DdnzMoYzg--tAPjFGZE5MLUC-JqtmqCfmncgz4nOclCjVrd-fKyiWu3Hjj30mSwNQHbyRrOUr4F-846_-dx2nIm2HbMmUy70Ol2o7vzbI0Ve5GDqYUnHX0isoEqIPNADcc55rGyNS3Sr6-cIblG_22_BSAbUfzWwccuzUKMoN2BAEro1nZbG2wMXUJ94GJpf4VwFEeJraHLY_Rc9HpmShpG8H0Xdga5pDBVP6vvMKxUFnTY3yWn595g402Tl_dFpa7LKRfVgA5aUx1C41xhcUEBv6gzvClbmw1DATU2MLdKEQ-XKD19qUbJ904gxtPzpnwVkVjQ0HtWi0Jo00r4PRbNVLAsOiDF4alI6lyQAPaL4YWAbn7XOr4284fNf1yLaUeV2GgBNqwpNVy5ONpZcgw5KYR-WFNQbYPwX49cjF0wrpHberGaa3IS7laOrV-T7fG2Sv8ZAks0X7z4_5I=w426-h729-no?authuser=0",
        "https://lh3.googleusercontent.com/_It8_2gblmn4XvnufsJWvdU8ecvYIDElDQTta68fiNoE3gOQrHXb48NCny7NlEdKbakusQsq9nZfamWCyRFBJikMI_DuyLlVlVhJc32NIAAMhxmfaSLl9t1ErXDgFEZa3C0oHPPW8VGkYz25pSKVy-uFUKvtCk-eR3yCBL4G7EeHGhYEP4OOBPO2w1ocKO-NbCfvGCJosNO0TQRNpnY2rcUEY9-c27YIyDJSrAcZq9A0LMFysle6UbLvpbJrbRMD_bNckmUzZT1j8YhHELdDbcuODz_gdYiHBiudMoVZ85dBR8s5GJlEBHhWq-y7ao9HvU91rQBkVd5QValEYNT_PcAiWb5ucZKtkBKhf_MQdUe7vlFmLXwetMzcd5e6cnL5lkKGTRknlDIT4ys69dFF-XEfOL8pJdtVd_qgN6yIg_W1q3aoQfRWuRy6s3Jsc9oX9G22DHvGBqSliU6DBa41zehyneoGVwBGzw-kiRZI8Rx585uxWmQQsMRTZ21SBbc-iPSOFb3BkmmRnNz8QimQ0e7NVOGNx40rASMR8thijhP-MCfx_fBoEksVl8vdJhFcTx9ceoPu1xOn08DiO7_EV6S9jFiRYOnM8CjLfnc-7qTx16w4V7WThY1_iJvrj7G3b_u_Nj14s2v4rQFqq9vwpU1Aga0Y9Mdl99vZr4euis_mebcaOswUgAHcfAnD145FWzU-Uj13pSpQn6Livj9c6dbS=w1007-h671-no?authuser=0",
        "https://lh3.googleusercontent.com/U3nHaipsyOittX37HPlT0Fkykui6Yoyb5T19XCbaBYH5EPHg2BfRXlH914AIJMgGsxHFntP_n_41LNnlJf-AENSBydOg3Rju2vB3lTUA785uDWyuj9Wpocz-E8u0tBdYhBwPycSIi_OAXFqWxczM1-vIjMWRUlLY0TpUWYX3OsX76TjQezLJjnK6_UBLR0qa78rODn09PK2Em7BCPlGw4zdQSrJIyC2ir57D1QrmuPtr9L9Hvrugg22ZbR4IJ18wJpuesjbFMMjejygtB6KifpGPu3vM08u-_yY55EyZhUWlephQN_y4v6adidtFDZhhMLiDKYKhfEMlAI63MpjWIVdmFeYdtNV8J5rMDvv-PKH5LqxVw_PKBg2ABTMCOn3a7YDjCLp6mvBVjClcpXVBoWAmtQ65TtsM3R6Azr6UjbDWKoDIvn7YG-4_O-lEqw0j4ggHpngJ_qb9f0xc54_dhFwrRkaejsO5Uvu7iKEvCYKvDiYXFcXkwHmpxiWdah4BVA94C2KlcOlmdLp5LUkQnsmWEwui9Ca9Z1wv7w-iiWW-aAqvpSGa0Vfqfr2sv8SBxUCx10dJs9bDmR2HP6MhziZa6ou6J6oXWV06JtDJR_nMivU7e5IHuDvAgJvVKRq-vRGMSuPnJQeUgAqubYX4jlm5RfV7Fy1iiWXAGYx5hGQoI1sPolbg0EKMrFze-mdpDtft2ViJyqkKbTHadFtLujcO=w1007-h671-no?authuser=0",
        "https://lh3.googleusercontent.com/Ni4nLlcNUrFBzE-Djerq-HunzNgXJHRMhl0hYw_TJwKUHYdiuGmSr65ZvPVgRxBANFCqI-woSVyTgljvuXz6b3THJUX_GSdqb3hPbxI6Gk8gtCT0L738WF0-_k0anV_BQ9XwxiIg9vkOEKimX5OqRJNmHO7zKsYQ4Q4z4pYKXFhSYnTd9iw4FRkldFEXAB0hAiA_3Ys-Gx2JMkTy51_f7jruoP0lzeTSWvanzgLceiXMFrfY5wL6iw7DtCiQ5deY7bDsePzCQMrEpBTeiiM7KV1C3vEalACILt8Rud0qGLVkHFPQE_DEYyuUlLPonS14ymgmtr7pF8Sec3oEM2Q7eX_mMjAxQC5dX7UE1rDX2S-vXga8Y_OZQWJxAzx8OX--Xt6utMFIRjXQCQQBamRnh-XBwQH_cbNncD4kuI0Lv4PQSFbSVUdGBUdEDnfGDITgKNMi8-r5XW3itgMc79CRyD7ioSNjUIAV_p3q08Pt-KHcgnTEmH6drWIEAdrKFkrLilk3zHlBbn1h-ODQl70Nxj1h-10WhEJQ0oSpHQW2yWb3YQ1bzrJUGHcIznpYHABT9SkghyjIJdGD7b73h_GmSDUNRkSQITNHvSwrTkg3SXcM49uczsS7_C2SXN1qZ2oChfpOUHay5sk6CYorjzwTkOb7mHJ_Eot7Wg6CbOJtdtIayi2t9hlKoYZ2Ybq64FUogEAWu1jD0XtvcTBch6JP2ziT=w1007-h671-no?authuser=0",
        "https://lh3.googleusercontent.com/WQ5pp1geNWGSyEb-ZAqebAGpIVXI_RKriUtlZWuCFw4ZdGz9dkRoqYNdu6LYuGNrRpopE8bIKK2GOBgrubIrgRkSyfTnaxEQEwJVH-3vyx0GiV4KmnXq8_7dDyzgZlUyladruJ1zLtthjCmLSuJ3WCrh_gOHoLbKR56RaHOoGAj1sc_pw2gYH1ceB5swu1rOlDhX6JCT_2iHzsGVfoUpeHj04xfKpSv7LW2oguqx_ziiG0arbrOUTUX80mftolfqdJzthwEp-k5Y0eXHRHLwXY0D2yvFfJEYyFnt0JFUMcHFFBhcooGXSFW-I48FcumWYvNPuul1UwnQqOscu9VQ1nJ5gTdjH0H1e9F7ZmyqE0qY1s2uba9CMebgDSp-uTxaGKdPQeY96RHky6_3YnWLZk5RkOFw6KiD4_Wb6Dje3T7V5FOgd2Z6-LzZw8klnQz0daZSIFkbs7qAnSo-BMHINQS-xooQprKNQny33K5ijn9Z9x9-7iYR2UrgQvbd0He6pIfiU0FE95mubXI3nHe4W2mg-n9Fa6KkXlwv4AOKYj1SA2jTU5fuZcH17yRJksInqGLpqHx8a-EB5MNc90VA-9vgJ2v2L9-TIeAFbQtqcbxULvMJPTrAntaN6jH2OjpNkhzTgCAClCBeVgrf0qprp9cdHwVhLAyxFMkR3pGD7A4yDj-kTL2-WdUTj7OHLECFXjzkBhDyIAn6fmTVQP4G-Ar_=w895-h672-no?authuser=0",
    ]
};
let title_count = 0;
let set_text = (text, el) => {
    new Promise(
        function(resolve, reject) {
            var text_len = el.innerText.length;
            for(var skat in el.innerText){
                setTimeout(() => {el.innerText = el.innerText.slice(0, -(0 + 1));}, 50*skat)
            }
        setTimeout(() => {resolve()}, 70 * text_len + 10)
    }).then(
        function() {
            for (let ind in text){
                setTimeout(() => {
                    var new_text = el.innerText.slice(0, -1) + text[ind] + '|';
                    el.innerText = new_text;
                }, 50*ind);
            }
            
        }, (err) => {console.log(err);}
    ).then(
        function() {
            setTimeout(() => {
                set_text(titles[title_count++ % titles.length], title);
            }, 3000)
        }
    )
    
}

window.addEventListener('DOMContentLoaded', () => {
    var date = new Date();
    current_year.innerText = date.getFullYear();
    set_text(titles[title_count++ % titles.length], title);
})
window.addEventListener('scroll', function(e){
    var scroll_pos = document.body.scrollTop || document.documentElement.scrollTop;
    if (scroll_pos > 5900) {
        social_link.style.display = "none";
    } else {
        social_link.style.display = "block";
    }
    if (scroll_pos > 420){
        if (stick_nav.classList.contains('hide')){
            stick_nav.style.opacity = "0";
            stick_nav.classList.remove('hide');
        } else {
            var opc;
            if (scroll_pos < 500) {opc = ((scroll_pos - 400) / 451) % 1;}
            else {opc = 1;stick_nav.classList.add('stick-nav');
            }
            stick_nav.style.opacity = String(opc);
        }
    } else {
        if (!stick_nav.classList.contains('hide')){stick_nav.classList.add('hide');}
    }
})


let photo_slider;

document.querySelectorAll(".modal-triger").forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        var target = el.dataset['target'];
        var imgs = gallery[target];
        var gallery_counter = 0;
        gallery_img.src = imgs[(gallery_counter++) % imgs.length]
        photo_slider = setInterval(()=> {
            gallery_img.src = imgs[(gallery_counter++) % imgs.length]
            setTimeout(() => {
                gallery_img.animate([
                        {opacity: 1},
                        {opacity: 0.8},
                        {opacity: 0.6},
                        {opacity: 0.4},
                        {opacity: 0.2},
                        {opacity: 0}
                    ], {"duration": 1510, "easing": "ease-out"});
            }, 3500)
        }, 5000)
        modal_header.innerText = target;
        gallery_modal.style.display = "block";

    })
})

document.querySelectorAll('.close').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.style.display = "none";
        clearInterval(photo_slider);
    })
})
window.onclick = function(e) {
      if (e.target == gallery_modal) {
        gallery_modal.style.display = "none";
        clearInterval(photo_slider);
      }
}