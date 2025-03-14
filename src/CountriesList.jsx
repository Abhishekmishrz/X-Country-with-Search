import React, { useEffect, useState } from "react";

const countryData = [
  {
    common: "South Georgia",
    png: "https://flagcdn.com/w320/gs.png",
  },
  {
    common: "Grenada",
    png: "https://flagcdn.com/w320/gd.png",
  },
  {
    common: "Switzerland",
    png: "https://flagcdn.com/w320/ch.png",
  },
  {
    common: "Sierra Leone",
    png: "https://flagcdn.com/w320/sl.png",
  },
  {
    common: "Hungary",
    png: "https://flagcdn.com/w320/hu.png",
  },
  {
    common: "Taiwan",
    png: "https://flagcdn.com/w320/tw.png",
  },
  {
    common: "Wallis and Futuna",
    png: "https://flagcdn.com/w320/wf.png",
  },
  {
    common: "Barbados",
    png: "https://flagcdn.com/w320/bb.png",
  },
  {
    common: "Pitcairn Islands",
    png: "https://flagcdn.com/w320/pn.png",
  },
  {
    common: "Ivory Coast",
    png: "https://flagcdn.com/w320/ci.png",
  },
  {
    common: "Tunisia",
    png: "https://flagcdn.com/w320/tn.png",
  },
  {
    common: "Italy",
    png: "https://flagcdn.com/w320/it.png",
  },
  {
    common: "Benin",
    png: "https://flagcdn.com/w320/bj.png",
  },
  {
    common: "Indonesia",
    png: "https://flagcdn.com/w320/id.png",
  },
  {
    common: "Cape Verde",
    png: "https://flagcdn.com/w320/cv.png",
  },
  {
    common: "Saint Kitts and Nevis",
    png: "https://flagcdn.com/w320/kn.png",
  },
  {
    common: "Laos",
    png: "https://flagcdn.com/w320/la.png",
  },
  {
    common: "Caribbean Netherlands",
    png: "https://flagcdn.com/w320/bq.png",
  },
  {
    common: "Uganda",
    png: "https://flagcdn.com/w320/ug.png",
  },
  {
    common: "Andorra",
    png: "https://flagcdn.com/w320/ad.png",
  },
  {
    common: "Burundi",
    png: "https://flagcdn.com/w320/bi.png",
  },
  {
    common: "South Africa",
    png: "https://flagcdn.com/w320/za.png",
  },
  {
    common: "France",
    png: "https://flagcdn.com/w320/fr.png",
  },
  {
    common: "Libya",
    png: "https://flagcdn.com/w320/ly.png",
  },
  {
    common: "Mexico",
    png: "https://flagcdn.com/w320/mx.png",
  },
  {
    common: "Gabon",
    png: "https://flagcdn.com/w320/ga.png",
  },
  {
    common: "Northern Mariana Islands",
    png: "https://flagcdn.com/w320/mp.png",
  },
  {
    common: "North Macedonia",
    png: "https://flagcdn.com/w320/mk.png",
  },
  {
    common: "China",
    png: "https://flagcdn.com/w320/cn.png",
  },
  {
    common: "Yemen",
    png: "https://flagcdn.com/w320/ye.png",
  },
  {
    common: "Saint Barthélemy",
    png: "https://flagcdn.com/w320/bl.png",
  },
  {
    common: "Guernsey",
    png: "https://flagcdn.com/w320/gg.png",
  },
  {
    common: "Solomon Islands",
    png: "https://flagcdn.com/w320/sb.png",
  },
  {
    common: "Svalbard and Jan Mayen",
    png: "https://flagcdn.com/w320/sj.png",
  },
  {
    common: "Faroe Islands",
    png: "https://flagcdn.com/w320/fo.png",
  },
  {
    common: "Uzbekistan",
    png: "https://flagcdn.com/w320/uz.png",
  },
  {
    common: "Egypt",
    png: "https://flagcdn.com/w320/eg.png",
  },
  {
    common: "Senegal",
    png: "https://flagcdn.com/w320/sn.png",
  },
  {
    common: "Sri Lanka",
    png: "https://flagcdn.com/w320/lk.png",
  },
  {
    common: "Palestine",
    png: "https://flagcdn.com/w320/ps.png",
  },
  {
    common: "Bangladesh",
    png: "https://flagcdn.com/w320/bd.png",
  },
  {
    common: "Peru",
    png: "https://flagcdn.com/w320/pe.png",
  },
  {
    common: "Singapore",
    png: "https://flagcdn.com/w320/sg.png",
  },
  {
    common: "Turkey",
    png: "https://flagcdn.com/w320/tr.png",
  },
  {
    common: "Afghanistan",
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
  },
  {
    common: "Aruba",
    png: "https://flagcdn.com/w320/aw.png",
  },
  {
    common: "Cook Islands",
    png: "https://flagcdn.com/w320/ck.png",
  },
  {
    common: "United Kingdom",
    png: "https://flagcdn.com/w320/gb.png",
  },
  {
    common: "Zambia",
    png: "https://flagcdn.com/w320/zm.png",
  },
  {
    common: "Finland",
    png: "https://flagcdn.com/w320/fi.png",
  },
  {
    common: "Niger",
    png: "https://flagcdn.com/w320/ne.png",
  },
  {
    common: "Christmas Island",
    png: "https://flagcdn.com/w320/cx.png",
  },
  {
    common: "Tokelau",
    png: "https://flagcdn.com/w320/tk.png",
  },
  {
    common: "Guinea-Bissau",
    png: "https://flagcdn.com/w320/gw.png",
  },
  {
    common: "Azerbaijan",
    png: "https://flagcdn.com/w320/az.png",
  },
  {
    common: "Réunion",
    png: "https://flagcdn.com/w320/re.png",
  },
  {
    common: "Djibouti",
    png: "https://flagcdn.com/w320/dj.png",
  },
  {
    common: "North Korea",
    png: "https://flagcdn.com/w320/kp.png",
  },
  {
    common: "Mauritius",
    png: "https://flagcdn.com/w320/mu.png",
  },
  {
    common: "Montserrat",
    png: "https://flagcdn.com/w320/ms.png",
  },
  {
    common: "United States Virgin Islands",
    png: "https://flagcdn.com/w320/vi.png",
  },
  {
    common: "Colombia",
    png: "https://flagcdn.com/w320/co.png",
  },
  {
    common: "Greece",
    png: "https://flagcdn.com/w320/gr.png",
  },
  {
    common: "Croatia",
    png: "https://flagcdn.com/w320/hr.png",
  },
  {
    common: "Morocco",
    png: "https://flagcdn.com/w320/ma.png",
  },
  {
    common: "Algeria",
    png: "https://flagcdn.com/w320/dz.png",
  },
  {
    common: "Antarctica",
    png: "https://flagcdn.com/w320/aq.png",
  },
  {
    common: "Netherlands",
    png: "https://flagcdn.com/w320/nl.png",
  },
  {
    common: "Sudan",
    png: "https://flagcdn.com/w320/sd.png",
  },
  {
    common: "Fiji",
    png: "https://flagcdn.com/w320/fj.png",
  },
  {
    common: "Liechtenstein",
    png: "https://flagcdn.com/w320/li.png",
  },
  {
    common: "Nepal",
    png: "https://flagcdn.com/w320/np.png",
  },
  {
    common: "Puerto Rico",
    png: "https://flagcdn.com/w320/pr.png",
  },
  {
    common: "Georgia",
    png: "https://flagcdn.com/w320/ge.png",
  },
  {
    common: "Pakistan",
    png: "https://flagcdn.com/w320/pk.png",
  },
  {
    common: "Monaco",
    png: "https://flagcdn.com/w320/mc.png",
  },
  {
    common: "Botswana",
    png: "https://flagcdn.com/w320/bw.png",
  },
  {
    common: "Lebanon",
    png: "https://flagcdn.com/w320/lb.png",
  },
  {
    common: "Papua New Guinea",
    png: "https://flagcdn.com/w320/pg.png",
  },
  {
    common: "Mayotte",
    png: "https://flagcdn.com/w320/yt.png",
  },
  {
    common: "Dominican Republic",
    png: "https://flagcdn.com/w320/do.png",
  },
  {
    common: "Norfolk Island",
    png: "https://flagcdn.com/w320/nf.png",
  },
  {
    common: "Bouvet Island",
    png: "https://flagcdn.com/w320/bv.png",
  },
  {
    common: "Qatar",
    png: "https://flagcdn.com/w320/qa.png",
  },
  {
    common: "Madagascar",
    png: "https://flagcdn.com/w320/mg.png",
  },
  {
    common: "India",
    png: "https://flagcdn.com/w320/in.png",
  },
  {
    common: "Syria",
    png: "https://flagcdn.com/w320/sy.png",
  },
  {
    common: "Montenegro",
    png: "https://flagcdn.com/w320/me.png",
  },
  {
    common: "Eswatini",
    png: "https://flagcdn.com/w320/sz.png",
  },
  {
    common: "Paraguay",
    png: "https://flagcdn.com/w320/py.png",
  },
  {
    common: "El Salvador",
    png: "https://flagcdn.com/w320/sv.png",
  },
  {
    common: "Ukraine",
    png: "https://flagcdn.com/w320/ua.png",
  },
  {
    common: "Isle of Man",
    png: "https://flagcdn.com/w320/im.png",
  },
  {
    common: "Namibia",
    png: "https://flagcdn.com/w320/na.png",
  },
  {
    common: "United Arab Emirates",
    png: "https://flagcdn.com/w320/ae.png",
  },
  {
    common: "Bulgaria",
    png: "https://flagcdn.com/w320/bg.png",
  },
  {
    common: "Greenland",
    png: "https://flagcdn.com/w320/gl.png",
  },
  {
    common: "Germany",
    png: "https://flagcdn.com/w320/de.png",
  },
  {
    common: "Cambodia",
    png: "https://flagcdn.com/w320/kh.png",
  },
  {
    common: "Iraq",
    png: "https://flagcdn.com/w320/iq.png",
  },
  {
    common: "French Southern and Antarctic Lands",
    png: "https://flagcdn.com/w320/tf.png",
  },
  {
    common: "Sweden",
    png: "https://flagcdn.com/w320/se.png",
  },
  {
    common: "Cuba",
    png: "https://flagcdn.com/w320/cu.png",
  },
  {
    common: "Kyrgyzstan",
    png: "https://flagcdn.com/w320/kg.png",
  },
  {
    common: "Russia",
    png: "https://flagcdn.com/w320/ru.png",
  },
  {
    common: "Malaysia",
    png: "https://flagcdn.com/w320/my.png",
  },
  {
    common: "São Tomé and Príncipe",
    png: "https://flagcdn.com/w320/st.png",
  },
  {
    common: "Cyprus",
    png: "https://flagcdn.com/w320/cy.png",
  },
  {
    common: "Canada",
    png: "https://flagcdn.com/w320/ca.png",
  },
  {
    common: "Malawi",
    png: "https://flagcdn.com/w320/mw.png",
  },
  {
    common: "Saudi Arabia",
    png: "https://flagcdn.com/w320/sa.png",
  },
  {
    common: "Bosnia and Herzegovina",
    png: "https://flagcdn.com/w320/ba.png",
  },
  {
    common: "Ethiopia",
    png: "https://flagcdn.com/w320/et.png",
  },
  {
    common: "Spain",
    png: "https://flagcdn.com/w320/es.png",
  },
  {
    common: "Slovenia",
    png: "https://flagcdn.com/w320/si.png",
  },
  {
    common: "Oman",
    png: "https://flagcdn.com/w320/om.png",
  },
  {
    common: "Saint Pierre and Miquelon",
    png: "https://flagcdn.com/w320/pm.png",
  },
  {
    common: "Macau",
    png: "https://flagcdn.com/w320/mo.png",
  },
  {
    common: "San Marino",
    png: "https://flagcdn.com/w320/sm.png",
  },
  {
    common: "Lesotho",
    png: "https://flagcdn.com/w320/ls.png",
  },
  {
    common: "Marshall Islands",
    png: "https://flagcdn.com/w320/mh.png",
  },
  {
    common: "Sint Maarten",
    png: "https://flagcdn.com/w320/sx.png",
  },
  {
    common: "Iceland",
    png: "https://flagcdn.com/w320/is.png",
  },
  {
    common: "Luxembourg",
    png: "https://flagcdn.com/w320/lu.png",
  },
  {
    common: "Argentina",
    png: "https://flagcdn.com/w320/ar.png",
  },
  {
    common: "Turks and Caicos Islands",
    png: "https://flagcdn.com/w320/tc.png",
  },
  {
    common: "Nauru",
    png: "https://flagcdn.com/w320/nr.png",
  },
  {
    common: "Cocos (Keeling) Islands",
    png: "https://flagcdn.com/w320/cc.png",
  },
  {
    common: "Western Sahara",
    png: "https://flagcdn.com/w320/eh.png",
  },
  {
    common: "Dominica",
    png: "https://flagcdn.com/w320/dm.png",
  },
  {
    common: "Costa Rica",
    png: "https://flagcdn.com/w320/cr.png",
  },
  {
    common: "Australia",
    png: "https://flagcdn.com/w320/au.png",
  },
  {
    common: "Thailand",
    png: "https://flagcdn.com/w320/th.png",
  },
  {
    common: "Haiti",
    png: "https://flagcdn.com/w320/ht.png",
  },
  {
    common: "Tuvalu",
    png: "https://flagcdn.com/w320/tv.png",
  },
  {
    common: "Honduras",
    png: "https://flagcdn.com/w320/hn.png",
  },
  {
    common: "Equatorial Guinea",
    png: "https://flagcdn.com/w320/gq.png",
  },
  {
    common: "Saint Lucia",
    png: "https://flagcdn.com/w320/lc.png",
  },
  {
    common: "French Polynesia",
    png: "https://flagcdn.com/w320/pf.png",
  },
  {
    common: "Belarus",
    png: "https://flagcdn.com/w320/by.png",
  },
  {
    common: "Latvia",
    png: "https://flagcdn.com/w320/lv.png",
  },
  {
    common: "Palau",
    png: "https://flagcdn.com/w320/pw.png",
  },
  {
    common: "Guadeloupe",
    png: "https://flagcdn.com/w320/gp.png",
  },
  {
    common: "Philippines",
    png: "https://flagcdn.com/w320/ph.png",
  },
  {
    common: "Gibraltar",
    png: "https://flagcdn.com/w320/gi.png",
  },
  {
    common: "Denmark",
    png: "https://flagcdn.com/w320/dk.png",
  },
  {
    common: "Cameroon",
    png: "https://flagcdn.com/w320/cm.png",
  },
  {
    common: "Guinea",
    png: "https://flagcdn.com/w320/gn.png",
  },
  {
    common: "Bahrain",
    png: "https://flagcdn.com/w320/bh.png",
  },
  {
    common: "Suriname",
    png: "https://flagcdn.com/w320/sr.png",
  },
  {
    common: "DR Congo",
    png: "https://flagcdn.com/w320/cd.png",
  },
  {
    common: "Somalia",
    png: "https://flagcdn.com/w320/so.png",
  },
  {
    common: "Czechia",
    png: "https://flagcdn.com/w320/cz.png",
  },
  {
    common: "New Caledonia",
    png: "https://flagcdn.com/w320/nc.png",
  },
  {
    common: "Vanuatu",
    png: "https://flagcdn.com/w320/vu.png",
  },
  {
    common: "Saint Helena, Ascension and Tristan da Cunha",
    png: "https://flagcdn.com/w320/sh.png",
  },
  {
    common: "Togo",
    png: "https://flagcdn.com/w320/tg.png",
  },
  {
    common: "British Virgin Islands",
    png: "https://flagcdn.com/w320/vg.png",
  },
  {
    common: "Kenya",
    png: "https://flagcdn.com/w320/ke.png",
  },
  {
    common: "Niue",
    png: "https://flagcdn.com/w320/nu.png",
  },
  {
    common: "Heard Island and McDonald Islands",
    png: "https://flagcdn.com/w320/hm.png",
  },
  {
    common: "Rwanda",
    png: "https://flagcdn.com/w320/rw.png",
  },
  {
    common: "Estonia",
    png: "https://flagcdn.com/w320/ee.png",
  },
  {
    common: "Romania",
    png: "https://flagcdn.com/w320/ro.png",
  },
  {
    common: "Trinidad and Tobago",
    png: "https://flagcdn.com/w320/tt.png",
  },
  {
    common: "Guyana",
    png: "https://flagcdn.com/w320/gy.png",
  },
  {
    common: "Timor-Leste",
    png: "https://flagcdn.com/w320/tl.png",
  },
  {
    common: "Vietnam",
    png: "https://flagcdn.com/w320/vn.png",
  },
  {
    common: "Uruguay",
    png: "https://flagcdn.com/w320/uy.png",
  },
  {
    common: "Vatican City",
    png: "https://flagcdn.com/w320/va.png",
  },
  {
    common: "Hong Kong",
    png: "https://flagcdn.com/w320/hk.png",
  },
  {
    common: "Austria",
    png: "https://flagcdn.com/w320/at.png",
  },
  {
    common: "Antigua and Barbuda",
    png: "https://flagcdn.com/w320/ag.png",
  },
  {
    common: "Turkmenistan",
    png: "https://flagcdn.com/w320/tm.png",
  },
  {
    common: "Mozambique",
    png: "https://flagcdn.com/w320/mz.png",
  },
  {
    common: "Panama",
    png: "https://flagcdn.com/w320/pa.png",
  },
  {
    common: "Micronesia",
    png: "https://flagcdn.com/w320/fm.png",
  },
  {
    common: "Ireland",
    png: "https://flagcdn.com/w320/ie.png",
  },
  {
    common: "Curaçao",
    png: "https://flagcdn.com/w320/cw.png",
  },
  {
    common: "French Guiana",
    png: "https://flagcdn.com/w320/gf.png",
  },
  {
    common: "Norway",
    png: "https://flagcdn.com/w320/no.png",
  },
  {
    common: "Åland Islands",
    png: "https://flagcdn.com/w320/ax.png",
  },
  {
    common: "Central African Republic",
    png: "https://flagcdn.com/w320/cf.png",
  },
  {
    common: "Burkina Faso",
    png: "https://flagcdn.com/w320/bf.png",
  },
  {
    common: "Eritrea",
    png: "https://flagcdn.com/w320/er.png",
  },
  {
    common: "Tanzania",
    png: "https://flagcdn.com/w320/tz.png",
  },
  {
    common: "South Korea",
    png: "https://flagcdn.com/w320/kr.png",
  },
  {
    common: "Jordan",
    png: "https://flagcdn.com/w320/jo.png",
  },
  {
    common: "Mauritania",
    png: "https://flagcdn.com/w320/mr.png",
  },
  {
    common: "Lithuania",
    png: "https://flagcdn.com/w320/lt.png",
  },
  {
    common: "United States Minor Outlying Islands",
    png: "https://flagcdn.com/w320/um.png",
  },
  {
    common: "Slovakia",
    png: "https://flagcdn.com/w320/sk.png",
  },
  {
    common: "Angola",
    png: "https://flagcdn.com/w320/ao.png",
  },
  {
    common: "Kazakhstan",
    png: "https://flagcdn.com/w320/kz.png",
  },
  {
    common: "Moldova",
    png: "https://flagcdn.com/w320/md.png",
  },
  {
    common: "Mali",
    png: "https://flagcdn.com/w320/ml.png",
  },
  {
    common: "Falkland Islands",
    png: "https://flagcdn.com/w320/fk.png",
  },
  {
    common: "Armenia",
    png: "https://flagcdn.com/w320/am.png",
  },
  {
    common: "Samoa",
    png: "https://flagcdn.com/w320/ws.png",
  },
  {
    common: "Jersey",
    png: "https://flagcdn.com/w320/je.png",
  },
  {
    common: "Japan",
    png: "https://flagcdn.com/w320/jp.png",
  },
  {
    common: "Bolivia",
    png: "https://flagcdn.com/w320/bo.png",
  },
  {
    common: "Chile",
    png: "https://flagcdn.com/w320/cl.png",
  },
  {
    common: "United States",
    png: "https://flagcdn.com/w320/us.png",
  },
  {
    common: "Saint Vincent and the Grenadines",
    png: "https://flagcdn.com/w320/vc.png",
  },
  {
    common: "Bermuda",
    png: "https://flagcdn.com/w320/bm.png",
  },
  {
    common: "Seychelles",
    png: "https://flagcdn.com/w320/sc.png",
  },
  {
    common: "British Indian Ocean Territory",
    png: "https://flagcdn.com/w320/io.png",
  },
  {
    common: "Guatemala",
    png: "https://flagcdn.com/w320/gt.png",
  },
  {
    common: "Ecuador",
    png: "https://flagcdn.com/w320/ec.png",
  },
  {
    common: "Martinique",
    png: "https://flagcdn.com/w320/mq.png",
  },
  {
    common: "Tajikistan",
    png: "https://flagcdn.com/w320/tj.png",
  },
  {
    common: "Malta",
    png: "https://flagcdn.com/w320/mt.png",
  },
  {
    common: "Gambia",
    png: "https://flagcdn.com/w320/gm.png",
  },
  {
    common: "Nigeria",
    png: "https://flagcdn.com/w320/ng.png",
  },
  {
    common: "Bahamas",
    png: "https://flagcdn.com/w320/bs.png",
  },
  {
    common: "Kosovo",
    png: "https://flagcdn.com/w320/xk.png",
  },
  {
    common: "Kuwait",
    png: "https://flagcdn.com/w320/kw.png",
  },
  {
    common: "Maldives",
    png: "https://flagcdn.com/w320/mv.png",
  },
  {
    common: "South Sudan",
    png: "https://flagcdn.com/w320/ss.png",
  },
  {
    common: "Iran",
    png: "https://flagcdn.com/w320/ir.png",
  },
  {
    common: "Albania",
    png: "https://flagcdn.com/w320/al.png",
  },
  {
    common: "Brazil",
    png: "https://flagcdn.com/w320/br.png",
  },
  {
    common: "Serbia",
    png: "https://flagcdn.com/w320/rs.png",
  },
  {
    common: "Belize",
    png: "https://flagcdn.com/w320/bz.png",
  },
  {
    common: "Myanmar",
    png: "https://flagcdn.com/w320/mm.png",
  },
  {
    common: "Bhutan",
    png: "https://flagcdn.com/w320/bt.png",
  },
  {
    common: "Venezuela",
    png: "https://flagcdn.com/w320/ve.png",
  },
  {
    common: "Liberia",
    png: "https://flagcdn.com/w320/lr.png",
  },
  {
    common: "Jamaica",
    png: "https://flagcdn.com/w320/jm.png",
  },
  {
    common: "Poland",
    png: "https://flagcdn.com/w320/pl.png",
  },
  {
    common: "Cayman Islands",
    png: "https://flagcdn.com/w320/ky.png",
  },
  {
    common: "Brunei",
    png: "https://flagcdn.com/w320/bn.png",
  },
  {
    common: "Comoros",
    png: "https://flagcdn.com/w320/km.png",
  },
  {
    common: "Guam",
    png: "https://flagcdn.com/w320/gu.png",
  },
  {
    common: "Tonga",
    png: "https://flagcdn.com/w320/to.png",
  },
  {
    common: "Kiribati",
    png: "https://flagcdn.com/w320/ki.png",
  },
  {
    common: "Ghana",
    png: "https://flagcdn.com/w320/gh.png",
  },
  {
    common: "Chad",
    png: "https://flagcdn.com/w320/td.png",
  },
  {
    common: "Zimbabwe",
    png: "https://flagcdn.com/w320/zw.png",
  },
  {
    common: "Saint Martin",
    png: "https://flagcdn.com/w320/mf.png",
  },
  {
    common: "Mongolia",
    png: "https://flagcdn.com/w320/mn.png",
  },
  {
    common: "Portugal",
    png: "https://flagcdn.com/w320/pt.png",
  },
  {
    common: "American Samoa",
    png: "https://flagcdn.com/w320/as.png",
  },
  {
    common: "Republic of the Congo",
    png: "https://flagcdn.com/w320/cg.png",
  },
  {
    common: "Belgium",
    png: "https://flagcdn.com/w320/be.png",
  },
  {
    common: "Israel",
    png: "https://flagcdn.com/w320/il.png",
  },
  {
    common: "New Zealand",
    png: "https://flagcdn.com/w320/nz.png",
  },
  {
    common: "Nicaragua",
    png: "https://flagcdn.com/w320/ni.png",
  },
  {
    common: "Anguilla",
    png: "https://flagcdn.com/w320/ai.png",
  },
];

const CountriesList = () => {
  const [countries, setCountries] = useState(countryData);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredCountries = debouncedSearch
    ? countries.filter((country) =>
        country.common.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : countries;

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        {filteredCountries.map((country) => (
          <div
            key={country.common}
            style={{
              textAlign: "center",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <img
              src={country.png}
              alt={`Flag of ${country.common}`}
              style={{ width: "100px", height: "auto" }}
            />
            <p>{country.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
