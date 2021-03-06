import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image, Modal } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample'; 

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const DATA = [
  {
    "id": 0,
    "deputado": "Abílio Santana",
    "partido": "PL",
    "estado": "BA",
    "email": "dep.abiliosantana@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204554.jpg"
  },
  {
    "id": 1,
    "deputado": "Abou Anni",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.abouanni@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204521.jpg"
  },
  {
    "id": 2,
    "deputado": "Acácio Favacho",
    "partido": "PROS",
    "estado": "AP",
    "email": "dep.acaciofavacho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204379.jpg"
  },
  {
    "id": 3,
    "deputado": "Adolfo Viana",
    "partido": "PSDB",
    "estado": "BA",
    "email": "dep.adolfoviana@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204560.jpg"
  },
  {
    "id": 4,
    "deputado": "Adriana Ventura",
    "partido": "NOVO",
    "estado": "SP",
    "email": "dep.adrianaventura@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204528.jpg"
  },
  {
    "id": 5,
    "deputado": "Adriano do Baldy",
    "partido": "PP",
    "estado": "GO",
    "email": "dep.adrianodobaldy@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/121948.jpg"
  },
  {
    "id": 6,
    "deputado": "Aécio Neves",
    "partido": "PSDB",
    "estado": "MG",
    "email": "dep.aecioneves@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74646.jpg"
  },
  {
    "id": 7,
    "deputado": "Aelton Freitas",
    "partido": "PL",
    "estado": "MG",
    "email": "dep.aeltonfreitas@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141372.jpg"
  },
  {
    "id": 8,
    "deputado": "Afonso Florence",
    "partido": "PT",
    "estado": "BA",
    "email": "dep.afonsoflorence@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160508.jpg"
  },
  {
    "id": 9,
    "deputado": "Afonso Hamm",
    "partido": "PP",
    "estado": "RS",
    "email": "dep.afonsohamm@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/136811.jpg"
  },
  {
    "id": 10,
    "deputado": "Afonso Motta",
    "partido": "PDT",
    "estado": "RS",
    "email": "dep.afonsomotta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178835.jpg"
  },
  {
    "id": 11,
    "deputado": "Aguinaldo Ribeiro",
    "partido": "PP",
    "estado": "PB",
    "email": "dep.aguinaldoribeiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160527.jpg"
  },
  {
    "id": 12,
    "deputado": "Airton Faleiro",
    "partido": "PT",
    "estado": "PA",
    "email": "dep.airtonfaleiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204495.jpg"
  },
  {
    "id": 13,
    "deputado": "AJ Albuquerque",
    "partido": "PP",
    "estado": "CE",
    "email": "dep.ajalbuquerque@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204549.jpg"
  },
  {
    "id": 14,
    "deputado": "Alan Rick",
    "partido": "DEM",
    "estado": "AC",
    "email": "dep.alanrick@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178836.jpg"
  },
  {
    "id": 15,
    "deputado": "Alceu Moreira",
    "partido": "MDB",
    "estado": "RS",
    "email": "dep.alceumoreira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160559.jpg"
  },
  {
    "id": 16,
    "deputado": "Alcides Rodrigues",
    "partido": "Patriota",
    "estado": "GO",
    "email": "dep.alcidesrodrigues@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204413.jpg"
  },
  {
    "id": 17,
    "deputado": "Alê Silva",
    "partido": "PSL",
    "estado": "MG",
    "email": "dep.alesilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204545.jpg"
  },
  {
    "id": 18,
    "deputado": "Alencar Santana Braga",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.alencarsantanabraga@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204501.jpg"
  },
  {
    "id": 19,
    "deputado": "Alessandro Molon",
    "partido": "PSB",
    "estado": "RJ",
    "email": "dep.alessandromolon@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160511.jpg"
  },
  {
    "id": 20,
    "deputado": "Alex Manente",
    "partido": "Cidadania",
    "estado": "SP",
    "email": "dep.alexmanente@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178972.jpg"
  },
  {
    "id": 21,
    "deputado": "Alex Santana",
    "partido": "PDT",
    "estado": "BA",
    "email": "dep.alexsantana@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204571.jpg"
  },
  {
    "id": 22,
    "deputado": "Alexandre Frota",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.alexandrefrota@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204544.jpg"
  },
  {
    "id": 23,
    "deputado": "Alexandre Leite",
    "partido": "DEM",
    "estado": "SP",
    "email": "dep.alexandreleite@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160545.jpg"
  },
  {
    "id": 24,
    "deputado": "Alexandre Padilha",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.alexandrepadilha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204503.jpg"
  },
  {
    "id": 25,
    "deputado": "Alexis Fonteyne",
    "partido": "NOVO",
    "estado": "SP",
    "email": "dep.alexisfonteyne@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204516.jpg"
  },
  {
    "id": 26,
    "deputado": "Alice Portugal",
    "partido": "PCdoB",
    "estado": "BA",
    "email": "dep.aliceportugal@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74057.jpg"
  },
  {
    "id": 27,
    "deputado": "Aliel Machado",
    "partido": "PSB",
    "estado": "PR",
    "email": "dep.alielmachado@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178927.jpg"
  },
  {
    "id": 28,
    "deputado": "Aline Gurgel",
    "partido": "Republicanos",
    "estado": "AP",
    "email": "dep.alinegurgel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204353.jpg"
  },
  {
    "id": 29,
    "deputado": "Aline Sleutjes",
    "partido": "PSL",
    "estado": "PR",
    "email": "dep.alinesleutjes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204400.jpg"
  },
  {
    "id": 30,
    "deputado": "Altineu Côrtes",
    "partido": "PL",
    "estado": "RJ",
    "email": "dep.altineucortes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178937.jpg"
  },
  {
    "id": 31,
    "deputado": "Aluisio Mendes",
    "partido": "PSC",
    "estado": "MA",
    "email": "dep.aluisiomendes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178881.jpg"
  },
  {
    "id": 32,
    "deputado": "Amaro Neto",
    "partido": "Republicanos",
    "estado": "ES",
    "email": "dep.amaroneto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204356.jpg"
  },
  {
    "id": 33,
    "deputado": "André Abdon",
    "partido": "PP",
    "estado": "AP",
    "email": "dep.andreabdon@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178831.jpg"
  },
  {
    "id": 34,
    "deputado": "André de Paula",
    "partido": "PSD",
    "estado": "PE",
    "email": "dep.andredepaula@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74471.jpg"
  },
  {
    "id": 35,
    "deputado": "André Ferreira",
    "partido": "PSC",
    "estado": "PE",
    "email": "dep.andreferreira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204423.jpg"
  },
  {
    "id": 36,
    "deputado": "André Figueiredo",
    "partido": "PDT",
    "estado": "CE",
    "email": "dep.andrefigueiredo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/133439.jpg"
  },
  {
    "id": 37,
    "deputado": "André Fufuca",
    "partido": "PP",
    "estado": "MA",
    "email": "dep.andrefufuca@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178882.jpg"
  },
  {
    "id": 38,
    "deputado": "André Janones",
    "partido": "Avante",
    "estado": "MG",
    "email": "dep.andrejanones@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204515.jpg"
  },
  {
    "id": 39,
    "deputado": "Angela Amin",
    "partido": "PP",
    "estado": "SC",
    "email": "dep.angelaamin@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73696.jpg"
  },
  {
    "id": 40,
    "deputado": "Aníbal Gomes",
    "partido": "DEM",
    "estado": "CE",
    "email": "dep.anibalgomes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74212.jpg"
  },
  {
    "id": 41,
    "deputado": "Antonio Brito",
    "partido": "PSD",
    "estado": "BA",
    "email": "dep.antoniobrito@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160553.jpg"
  },
  {
    "id": 42,
    "deputado": "Arlindo Chinaglia",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.arlindochinaglia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73433.jpg"
  },
  {
    "id": 43,
    "deputado": "Arnaldo Jardim",
    "partido": "Cidadania",
    "estado": "SP",
    "email": "dep.arnaldojardim@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141391.jpg"
  },
  {
    "id": 44,
    "deputado": "Aroldo Martins",
    "partido": "Republicanos",
    "estado": "PR",
    "email": "dep.aroldomartins@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204414.jpg"
  },
  {
    "id": 45,
    "deputado": "Arthur Lira",
    "partido": "PP",
    "estado": "AL",
    "email": "dep.arthurlira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160541.jpg"
  },
  {
    "id": 46,
    "deputado": "Arthur Oliveira Maia",
    "partido": "DEM",
    "estado": "BA",
    "email": "dep.arthuroliveiramaia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160600.jpg"
  },
  {
    "id": 47,
    "deputado": "Átila Lins",
    "partido": "PP",
    "estado": "AM",
    "email": "dep.atilalins@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74090.jpg"
  },
  {
    "id": 48,
    "deputado": "Átila Lira",
    "partido": "PP",
    "estado": "PI",
    "email": "dep.atilalira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74459.jpg"
  },
  {
    "id": 49,
    "deputado": "Augusto Coutinho",
    "partido": "Solidariedade",
    "estado": "PE",
    "email": "dep.augustocoutinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160665.jpg"
  },
  {
    "id": 50,
    "deputado": "Áurea Carolina",
    "partido": "PSOL",
    "estado": "MG",
    "email": "dep.aureacarolina@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204509.jpg"
  },
  {
    "id": 51,
    "deputado": "Aureo Ribeiro",
    "partido": "Solidariedade",
    "estado": "RJ",
    "email": "dep.aureoribeiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160512.jpg"
  },
  {
    "id": 52,
    "deputado": "Bacelar",
    "partido": "PODE",
    "estado": "BA",
    "email": "dep.bacelar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/69871.jpg"
  },
  {
    "id": 53,
    "deputado": "Baleia Rossi",
    "partido": "MDB",
    "estado": "SP",
    "email": "dep.baleiarossi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178975.jpg"
  },
  {
    "id": 54,
    "deputado": "Benedita da Silva",
    "partido": "PT",
    "estado": "RJ",
    "email": "dep.beneditadasilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73701.jpg"
  },
  {
    "id": 55,
    "deputado": "Benes Leocádio",
    "partido": "Republicanos",
    "estado": "RN",
    "email": "dep.benesleocadio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/109429.jpg"
  },
  {
    "id": 56,
    "deputado": "Beto Faro",
    "partido": "PT",
    "estado": "PA",
    "email": "dep.betofaro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141335.jpg"
  },
  {
    "id": 57,
    "deputado": "Beto Pereira",
    "partido": "PSDB",
    "estado": "MS",
    "email": "dep.betopereira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204358.jpg"
  },
  {
    "id": 58,
    "deputado": "Beto Rosado",
    "partido": "PP",
    "estado": "RN",
    "email": "dep.betorosado@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178948.jpg"
  },
  {
    "id": 59,
    "deputado": "Bia Kicis",
    "partido": "PSL",
    "estado": "DF",
    "email": "dep.biacavassa@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204374.jpg"
  },
  {
    "id": 60,
    "deputado": "Bibo Nunes",
    "partido": "PSL",
    "estado": "RS",
    "email": "dep.biakicis@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204388.jpg"
  },
  {
    "id": 61,
    "deputado": "Bilac Pinto",
    "partido": "DEM",
    "estado": "MG",
    "email": "dep.bibonunes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141513.jpg"
  },
  {
    "id": 62,
    "deputado": "Bira do Pindaré",
    "partido": "PSB",
    "estado": "MA",
    "email": "dep.bilacpinto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204561.jpg"
  },
  {
    "id": 63,
    "deputado": "Boca Aberta",
    "partido": "PROS",
    "estado": "PR",
    "email": "dep.biradopindare@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204397.jpg"
  },
  {
    "id": 64,
    "deputado": "Bohn Gass",
    "partido": "PT",
    "estado": "RS",
    "email": "dep.bocaaberta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160538.jpg"
  },
  {
    "id": 65,
    "deputado": "Bosco Costa",
    "partido": "PL",
    "estado": "SE",
    "email": "dep.bohngass@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74052.jpg"
  },
  {
    "id": 66,
    "deputado": "Bosco Saraiva",
    "partido": "Solidariedade",
    "estado": "AM",
    "email": "dep.boscocosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204551.jpg"
  },
  {
    "id": 67,
    "deputado": "Bozzella",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.boscosaraiva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204502.jpg"
  },
  {
    "id": 68,
    "deputado": "Bruna Furlan",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.bozzella@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160589.jpg"
  },
  {
    "id": 69,
    "deputado": "Cacá Leão",
    "partido": "PP",
    "estado": "BA",
    "email": "dep.brunafurlan@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/93083.jpg"
  },
  {
    "id": 70,
    "deputado": "Camilo Capiberibe",
    "partido": "PSB",
    "estado": "AP",
    "email": "dep.cacaleao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204352.jpg"
  },
  {
    "id": 71,
    "deputado": "Capitão Alberto Neto",
    "partido": "Republicanos",
    "estado": "AM",
    "email": "dep.camilocapiberibe@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204572.jpg"
  },
  {
    "id": 72,
    "deputado": "Capitão Augusto",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.capitaoalbertoneto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178829.jpg"
  },
  {
    "id": 73,
    "deputado": "Capitão Fábio Abreu",
    "partido": "PL",
    "estado": "PI",
    "email": "dep.capitaoaugusto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178924.jpg"
  },
  {
    "id": 74,
    "deputado": "Capitão Wagner",
    "partido": "PROS",
    "estado": "CE",
    "email": "dep.capitaofabioabreu@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204487.jpg"
  },
  {
    "id": 75,
    "deputado": "Carla Zambelli",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.capitaowagner@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204507.jpg"
  },
  {
    "id": 76,
    "deputado": "Carlos Bezerra",
    "partido": "MDB",
    "estado": "MT",
    "email": "dep.carladickson@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141401.jpg"
  },
  {
    "id": 77,
    "deputado": "Carlos Chiodini",
    "partido": "MDB",
    "estado": "SC",
    "email": "dep.carlazambelli@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204361.jpg"
  },
  {
    "id": 78,
    "deputado": "Carlos Gomes",
    "partido": "Republicanos",
    "estado": "RS",
    "email": "dep.carlosbezerra@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178962.jpg"
  },
  {
    "id": 79,
    "deputado": "Carlos Henrique Gaguim",
    "partido": "DEM",
    "estado": "TO",
    "email": "dep.carloschiodini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178993.jpg"
  },
  {
    "id": 80,
    "deputado": "Carlos Jordy",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.carlosgomes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204460.jpg"
  },
  {
    "id": 81,
    "deputado": "Carlos Sampaio",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.carloshenriquegaguim@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74262.jpg"
  },
  {
    "id": 82,
    "deputado": "Carlos Veras",
    "partido": "PT",
    "estado": "PE",
    "email": "dep.carlosjordy@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204426.jpg"
  },
  {
    "id": 83,
    "deputado": "Carlos Zarattini",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.carlossampaio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141398.jpg"
  },
  {
    "id": 84,
    "deputado": "Carmen Zanotto",
    "partido": "Cidadania",
    "estado": "SC",
    "email": "dep.carlosveras@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/164360.jpg"
  },
  {
    "id": 85,
    "deputado": "Caroline de Toni",
    "partido": "PSL",
    "estado": "SC",
    "email": "dep.carloszarattini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204369.jpg"
  },
  {
    "id": 86,
    "deputado": "Cássio Andrade",
    "partido": "PSB",
    "estado": "PA",
    "email": "dep.carmenzanotto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204499.jpg"
  },
  {
    "id": 87,
    "deputado": "Celina Leão",
    "partido": "PP",
    "estado": "DF",
    "email": "dep.carolinedetoni@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204380.jpg"
  },
  {
    "id": 88,
    "deputado": "Célio Moura",
    "partido": "PT",
    "estado": "TO",
    "email": "dep.cassioandrade@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204370.jpg"
  },
  {
    "id": 89,
    "deputado": "Célio Silveira",
    "partido": "PSDB",
    "estado": "GO",
    "email": "dep.celinaleao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178876.jpg"
  },
  {
    "id": 90,
    "deputado": "Célio Studart",
    "partido": "PV",
    "estado": "CE",
    "email": "dep.celiomoura@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204488.jpg"
  },
  {
    "id": 91,
    "deputado": "Celso Maldaner",
    "partido": "MDB",
    "estado": "SC",
    "email": "dep.celiosilveira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141405.jpg"
  },
  {
    "id": 92,
    "deputado": "Celso Russomanno",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.celiostudart@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73441.jpg"
  },
  {
    "id": 93,
    "deputado": "Celso Sabino",
    "partido": "PSDB",
    "estado": "PA",
    "email": "dep.celsomaldaner@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204496.jpg"
  },
  {
    "id": 94,
    "deputado": "Cezinha de Madureira",
    "partido": "PSD",
    "estado": "SP",
    "email": "dep.celsorussomanno@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204504.jpg"
  },
  {
    "id": 95,
    "deputado": "Charles Fernandes",
    "partido": "PSD",
    "estado": "BA",
    "email": "dep.celsosabino@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/205476.jpg"
  },
  {
    "id": 96,
    "deputado": "Charlles Evangelista",
    "partido": "PSL",
    "estado": "MG",
    "email": "dep.cezinhademadureira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204490.jpg"
  },
  {
    "id": 97,
    "deputado": "Chico D'Angelo",
    "partido": "PDT",
    "estado": "RJ",
    "email": "dep.charlesfernandes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141439.jpg"
  },
  {
    "id": 98,
    "deputado": "Chiquinho Brazão",
    "partido": "Avante",
    "estado": "RJ",
    "email": "dep.charllesevangelista@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204476.jpg"
  },
  {
    "id": 99,
    "deputado": "Chris Tonietto",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.chicodangelo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204462.jpg"
  },
  {
    "id": 100,
    "deputado": "Christiane de Souza Yared",
    "partido": "PL",
    "estado": "PR",
    "email": "dep.chiquinhobrazao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178928.jpg"
  },
  {
    "id": 101,
    "deputado": "Christino Aureo",
    "partido": "PP",
    "estado": "RJ",
    "email": "dep.christonietto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204440.jpg"
  },
  {
    "id": 102,
    "deputado": "Clarissa Garotinho",
    "partido": "PROS",
    "estado": "RJ",
    "email": "dep.christianedesouzayared@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178939.jpg"
  },
  {
    "id": 103,
    "deputado": "Claudio Cajado",
    "partido": "PP",
    "estado": "BA",
    "email": "dep.christinoaureo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74537.jpg"
  },
  {
    "id": 104,
    "deputado": "Cleber Verde",
    "partido": "Republicanos",
    "estado": "MA",
    "email": "dep.clarissagarotinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141408.jpg"
  },
  {
    "id": 105,
    "deputado": "Coronel Armando",
    "partido": "PSL",
    "estado": "SC",
    "email": "dep.claudiocajado@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204376.jpg"
  },
  {
    "id": 106,
    "deputado": "Coronel Chrisóstomo",
    "partido": "PSL",
    "estado": "RO",
    "email": "dep.cleberverde@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204378.jpg"
  },
  {
    "id": 107,
    "deputado": "Coronel Tadeu",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.coronelarmando@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204514.jpg"
  },
  {
    "id": 108,
    "deputado": "Cristiano Vale",
    "partido": "PL",
    "estado": "PA",
    "email": "dep.coronelchrisostomo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/135054.jpg"
  },
  {
    "id": 109,
    "deputado": "Da Vitoria",
    "partido": "Cidadania",
    "estado": "ES",
    "email": "dep.coroneltadeu@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204355.jpg"
  },
  {
    "id": 110,
    "deputado": "Dagoberto Nogueira",
    "partido": "PDT",
    "estado": "MS",
    "email": "dep.cristianovale@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141411.jpg"
  },
  {
    "id": 111,
    "deputado": "Damião Feliciano",
    "partido": "PDT",
    "estado": "PB",
    "email": "dep.davitoria@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74467.jpg"
  },
  {
    "id": 112,
    "deputado": "Daniel Almeida",
    "partido": "PCdoB",
    "estado": "BA",
    "email": "dep.dagobertonogueira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74060.jpg"
  },
  {
    "id": 113,
    "deputado": "Daniel Coelho",
    "partido": "Cidadania",
    "estado": "PE",
    "email": "dep.damiaofeliciano@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178916.jpg"
  },
  {
    "id": 114,
    "deputado": "Daniel Freitas",
    "partido": "PSL",
    "estado": "SC",
    "email": "dep.danielalmeida@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204367.jpg"
  },
  {
    "id": 115,
    "deputado": "Daniel Silveira",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.danielcoelho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204454.jpg"
  },
  {
    "id": 116,
    "deputado": "Daniel Trzeciak",
    "partido": "PSDB",
    "estado": "RS",
    "email": "dep.danielfreitas@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204409.jpg"
  },
  {
    "id": 117,
    "deputado": "Daniela do Waguinho",
    "partido": "MDB",
    "estado": "RJ",
    "email": "dep.danielsilveira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204459.jpg"
  },
  {
    "id": 118,
    "deputado": "Danilo Cabral",
    "partido": "PSB",
    "estado": "PE",
    "email": "dep.danieltrzeciak@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160528.jpg"
  },
  {
    "id": 119,
    "deputado": "Danilo Forte",
    "partido": "PSDB",
    "estado": "CE",
    "email": "dep.danieladowaguinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/62881.jpg"
  },
  {
    "id": 120,
    "deputado": "Danrlei de Deus Hinterholz",
    "partido": "PSD",
    "estado": "RS",
    "email": "dep.danilocabral@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160552.jpg"
  },
  {
    "id": 121,
    "deputado": "Darci de Matos",
    "partido": "PSD",
    "estado": "SC",
    "email": "dep.daniloforte@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/116379.jpg"
  },
  {
    "id": 122,
    "deputado": "David Miranda",
    "partido": "PSOL",
    "estado": "RJ",
    "email": "dep.danrleidedeushinterholz@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/205548.jpg"
  },
  {
    "id": 123,
    "deputado": "David Soares",
    "partido": "DEM",
    "estado": "SP",
    "email": "dep.darcidematos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204511.jpg"
  },
  {
    "id": 124,
    "deputado": "Delegado Antônio Furtado",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.davidmiranda@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204451.jpg"
  },
  {
    "id": 125,
    "deputado": "Delegado Éder Mauro",
    "partido": "PSD",
    "estado": "PA",
    "email": "dep.davidsoares@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178908.jpg"
  },
  {
    "id": 126,
    "deputado": "Delegado Marcelo Freitas",
    "partido": "PSL",
    "estado": "MG",
    "email": "dep.delegadoantoniofurtado@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204512.jpg"
  },
  {
    "id": 127,
    "deputado": "Delegado Pablo",
    "partido": "PSL",
    "estado": "AM",
    "email": "dep.delegadoedermauro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204569.jpg"
  },
  {
    "id": 128,
    "deputado": "Delegado Waldir",
    "partido": "PSL",
    "estado": "GO",
    "email": "dep.delegadomarcelofreitas@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/164359.jpg"
  },
  {
    "id": 129,
    "deputado": "Denis Bezerra",
    "partido": "PSB",
    "estado": "CE",
    "email": "dep.delegadopablo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204542.jpg"
  },
  {
    "id": 130,
    "deputado": "Diego Andrade",
    "partido": "PSD",
    "estado": "MG",
    "email": "dep.delegadowaldir@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160588.jpg"
  },
  {
    "id": 131,
    "deputado": "Diego Garcia",
    "partido": "PODE",
    "estado": "PR",
    "email": "dep.denisbezerra@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178929.jpg"
  },
  {
    "id": 132,
    "deputado": "Dimas Fabiano",
    "partido": "PP",
    "estado": "MG",
    "email": "dep.diegoandrade@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160599.jpg"
  },
  {
    "id": 133,
    "deputado": "Domingos Neto",
    "partido": "PSD",
    "estado": "CE",
    "email": "dep.diegogarcia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/143632.jpg"
  },
  {
    "id": 134,
    "deputado": "Domingos Sávio",
    "partido": "PSDB",
    "estado": "MG",
    "email": "dep.dimasfabiano@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160758.jpg"
  },
  {
    "id": 135,
    "deputado": "Dr. Frederico",
    "partido": "Patriota",
    "estado": "MG",
    "email": "dep.domingosneto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204518.jpg"
  },
  {
    "id": 136,
    "deputado": "Dr. Jaziel",
    "partido": "PL",
    "estado": "CE",
    "email": "dep.domingossavio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204481.jpg"
  },
  {
    "id": 137,
    "deputado": "Dr. Leonardo",
    "partido": "Solidariedade",
    "estado": "MT",
    "email": "dep.dr.frederico@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204439.jpg"
  },
  {
    "id": 138,
    "deputado": "Dr. Luiz Antonio Teixeira Jr.",
    "partido": "PP",
    "estado": "RJ",
    "email": "dep.dr.goncalo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204450.jpg"
  },
  {
    "id": 139,
    "deputado": "Dr. Luiz Ovando",
    "partido": "PSL",
    "estado": "MS",
    "email": "dep.dr.jaziel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204351.jpg"
  },
  {
    "id": 140,
    "deputado": "Dr. Zacharias Calil",
    "partido": "DEM",
    "estado": "GO",
    "email": "dep.dr.leonardo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204412.jpg"
  },
  {
    "id": 141,
    "deputado": "Dra. Soraya Manato",
    "partido": "PSL",
    "estado": "ES",
    "email": "dep.dr.luizantonioteixeirajr@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/81297.jpg"
  },
  {
    "id": 142,
    "deputado": "Dra. Vanda Milani",
    "partido": "Solidariedade",
    "estado": "AC",
    "email": "dep.dr.luizovando@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204434.jpg"
  },
  {
    "id": 143,
    "deputado": "Dulce Miranda",
    "partido": "MDB",
    "estado": "TO",
    "email": "dep.dr.zachariascalil@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178994.jpg"
  },
  {
    "id": 144,
    "deputado": "Edilázio Júnior",
    "partido": "PSD",
    "estado": "MA",
    "email": "dep.dra.sorayamanato@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204562.jpg"
  },
  {
    "id": 145,
    "deputado": "Edio Lopes",
    "partido": "PL",
    "estado": "RR",
    "email": "dep.dra.vandamilani@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141417.jpg"
  },
  {
    "id": 146,
    "deputado": "Edna Henrique",
    "partido": "PSDB",
    "estado": "PB",
    "email": "dep.dulcemiranda@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204421.jpg"
  },
  {
    "id": 147,
    "deputado": "Eduardo Barbosa",
    "partido": "PSDB",
    "estado": "MG",
    "email": "dep.edilaziojunior@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74655.jpg"
  },
  {
    "id": 148,
    "deputado": "Eduardo Bismarck",
    "partido": "PDT",
    "estado": "CE",
    "email": "dep.ediolopes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204541.jpg"
  },
  {
    "id": 149,
    "deputado": "Eduardo Bolsonaro",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.ednahenrique@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/92346.jpg"
  },
  {
    "id": 150,
    "deputado": "Eduardo Costa",
    "partido": "PTB",
    "estado": "PA",
    "email": "dep.eduardobarbosa@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204500.jpg"
  },
  {
    "id": 151,
    "deputado": "Eduardo Cury",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.eduardobismarck@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178977.jpg"
  },
  {
    "id": 152,
    "deputado": "Eduardo da Fonte",
    "partido": "PP",
    "estado": "PE",
    "email": "dep.eduardobolsonaro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141421.jpg"
  },
  {
    "id": 153,
    "deputado": "Efraim Filho",
    "partido": "DEM",
    "estado": "PB",
    "email": "dep.eduardocosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141422.jpg"
  },
  {
    "id": 154,
    "deputado": "Elcione Barbalho",
    "partido": "MDB",
    "estado": "PA",
    "email": "dep.eduardocury@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74075.jpg"
  },
  {
    "id": 155,
    "deputado": "Eli Borges",
    "partido": "Solidariedade",
    "estado": "TO",
    "email": "dep.eduardodafonte@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204364.jpg"
  },
  {
    "id": 156,
    "deputado": "Eli Corrêa Filho",
    "partido": "DEM",
    "estado": "SP",
    "email": "dep.efraimfilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160532.jpg"
  },
  {
    "id": 157,
    "deputado": "Elias Vaz",
    "partido": "PSB",
    "estado": "GO",
    "email": "dep.elcionebarbalho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204389.jpg"
  },
  {
    "id": 158,
    "deputado": "Elmar Nascimento",
    "partido": "DEM",
    "estado": "BA",
    "email": "dep.eliborges@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178854.jpg"
  },
  {
    "id": 159,
    "deputado": "Emanuel Pinheiro Neto",
    "partido": "PTB",
    "estado": "MT",
    "email": "dep.elicorreafilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/198783.jpg"
  },
  {
    "id": 160,
    "deputado": "Emidinho Madeira",
    "partido": "PSB",
    "estado": "MG",
    "email": "dep.eliasvaz@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/161550.jpg"
  },
  {
    "id": 161,
    "deputado": "Enio Verri",
    "partido": "PT",
    "estado": "PR",
    "email": "dep.elmarnascimento@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/132504.jpg"
  },
  {
    "id": 162,
    "deputado": "Enrico Misasi",
    "partido": "PV",
    "estado": "SP",
    "email": "dep.emanuelpinheironeto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204537.jpg"
  },
  {
    "id": 163,
    "deputado": "Erika Kokay",
    "partido": "PT",
    "estado": "DF",
    "email": "dep.emidinhomadeira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160575.jpg"
  },
  {
    "id": 164,
    "deputado": "Eros Biondini",
    "partido": "PROS",
    "estado": "MG",
    "email": "dep.enioverri@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160640.jpg"
  },
  {
    "id": 165,
    "deputado": "Euclydes Pettersen",
    "partido": "PSC",
    "estado": "MG",
    "email": "dep.enricomisasi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204482.jpg"
  },
  {
    "id": 166,
    "deputado": "Evair Vieira de Melo",
    "partido": "PP",
    "estado": "ES",
    "email": "dep.erikakokay@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178871.jpg"
  },
  {
    "id": 167,
    "deputado": "Expedito Netto",
    "partido": "PSD",
    "estado": "RO",
    "email": "dep.erosbiondini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178953.jpg"
  },
  {
    "id": 168,
    "deputado": "Fabio Faria",
    "partido": "PSD",
    "estado": "RN",
    "email": "dep.euclydespettersen@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141428.jpg"
  },
  {
    "id": 169,
    "deputado": "Fábio Henrique",
    "partido": "PDT",
    "estado": "SE",
    "email": "dep.evairvieirademelo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/68720.jpg"
  },
  {
    "id": 170,
    "deputado": "Fábio Mitidieri",
    "partido": "PSD",
    "estado": "SE",
    "email": "dep.expeditonetto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178969.jpg"
  },
  {
    "id": 171,
    "deputado": "Fábio Ramalho",
    "partido": "MDB",
    "estado": "MG",
    "email": "dep.fabiohenrique@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141427.jpg"
  },
  {
    "id": 172,
    "deputado": "Fabio Reis",
    "partido": "MDB",
    "estado": "SE",
    "email": "dep.fabiomitidieri@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/171623.jpg"
  },
  {
    "id": 173,
    "deputado": "Fabio Schiochet",
    "partido": "PSL",
    "estado": "SC",
    "email": "dep.fabioramalho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204368.jpg"
  },
  {
    "id": 174,
    "deputado": "Fábio Trad",
    "partido": "PSD",
    "estado": "MS",
    "email": "dep.fabioreis@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160587.jpg"
  },
  {
    "id": 175,
    "deputado": "Fausto Pinato",
    "partido": "PP",
    "estado": "SP",
    "email": "dep.fabioschiochet@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/66828.jpg"
  },
  {
    "id": 176,
    "deputado": "Felício Laterça",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.fabiotrad@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204477.jpg"
  },
  {
    "id": 177,
    "deputado": "Felipe Carreras",
    "partido": "PSB",
    "estado": "PE",
    "email": "dep.faustopinato@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/72442.jpg"
  },
  {
    "id": 178,
    "deputado": "Felipe Francischini",
    "partido": "PSL",
    "estado": "PR",
    "email": "dep.feliciolaterca@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204398.jpg"
  },
  {
    "id": 179,
    "deputado": "Felipe Rigoni",
    "partido": "PSB",
    "estado": "ES",
    "email": "dep.felipecarreras@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204371.jpg"
  },
  {
    "id": 180,
    "deputado": "Félix Mendonça Júnior",
    "partido": "PDT",
    "estado": "BA",
    "email": "dep.felipefrancischini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160666.jpg"
  },
  {
    "id": 181,
    "deputado": "Fernanda Melchionna",
    "partido": "PSOL",
    "estado": "RS",
    "email": "dep.feliperigoni@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204407.jpg"
  },
  {
    "id": 182,
    "deputado": "Fernando Coelho Filho",
    "partido": "DEM",
    "estado": "PE",
    "email": "dep.felixmendoncajunior@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141431.jpg"
  },
  {
    "id": 183,
    "deputado": "Fernando Monteiro",
    "partido": "PP",
    "estado": "PE",
    "email": "dep.fernandamelchionna@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/92699.jpg"
  },
  {
    "id": 184,
    "deputado": "Fernando Rodolfo",
    "partido": "PL",
    "estado": "PE",
    "email": "dep.fernandocoelhofilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204427.jpg"
  },
  {
    "id": 185,
    "deputado": "Filipe Barros",
    "partido": "PSL",
    "estado": "PR",
    "email": "dep.fernandomonteiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204411.jpg"
  },
  {
    "id": 186,
    "deputado": "Flávia Arruda",
    "partido": "PL",
    "estado": "DF",
    "email": "dep.fernandorodolfo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204354.jpg"
  },
  {
    "id": 187,
    "deputado": "Flávia Morais",
    "partido": "PDT",
    "estado": "GO",
    "email": "dep.filipebarros@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160598.jpg"
  },
  {
    "id": 188,
    "deputado": "Flaviano Melo",
    "partido": "MDB",
    "estado": "AC",
    "email": "dep.flaviaarruda@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141434.jpg"
  },
  {
    "id": 189,
    "deputado": "Flávio Nogueira",
    "partido": "PDT",
    "estado": "PI",
    "email": "dep.flaviamorais@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/191923.jpg"
  },
  {
    "id": 190,
    "deputado": "Flordelis",
    "partido": "PSD",
    "estado": "RJ",
    "email": "dep.flavianomelo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204447.jpg"
  },
  {
    "id": 191,
    "deputado": "Francisco Jr.",
    "partido": "PSD",
    "estado": "GO",
    "email": "dep.flavionogueira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204392.jpg"
  },
  {
    "id": 192,
    "deputado": "Franco Cartafina",
    "partido": "PP",
    "estado": "MG",
    "email": "dep.flordelis@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204510.jpg"
  },
  {
    "id": 193,
    "deputado": "Fred Costa",
    "partido": "Patriota",
    "estado": "MG",
    "email": "dep.franciscojr@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204494.jpg"
  },
  {
    "id": 194,
    "deputado": "Frei Anastacio Ribeiro",
    "partido": "PT",
    "estado": "PB",
    "email": "dep.francocartafina@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204393.jpg"
  },
  {
    "id": 195,
    "deputado": "Gelson Azevedo",
    "partido": "PL",
    "estado": "RJ",
    "email": "dep.fredcosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/115746.jpg"
  },
  {
    "id": 196,
    "deputado": "Genecias Noronha",
    "partido": "Solidariedade",
    "estado": "CE",
    "email": "dep.freianastacioribeiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160669.jpg"
  },
  {
    "id": 197,
    "deputado": "General Girão",
    "partido": "PSL",
    "estado": "RN",
    "email": "dep.gastaovieira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204473.jpg"
  },
  {
    "id": 198,
    "deputado": "General Peternelli",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.gelsonazevedo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204484.jpg"
  },
  {
    "id": 199,
    "deputado": "Geninho Zuliani",
    "partido": "DEM",
    "estado": "SP",
    "email": "dep.geneciasnoronha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204527.jpg"
  },
  {
    "id": 200,
    "deputado": "Geovania de Sá",
    "partido": "PSDB",
    "estado": "SC",
    "email": "dep.generalgirao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178966.jpg"
  },
  {
    "id": 201,
    "deputado": "Gervásio Maia",
    "partido": "PSB",
    "estado": "PB",
    "email": "dep.generalpeternelli@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204394.jpg"
  },
  {
    "id": 202,
    "deputado": "Giacobo",
    "partido": "PL",
    "estado": "PR",
    "email": "dep.geninhozuliani@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74383.jpg"
  },
  {
    "id": 203,
    "deputado": "Gil Cutrim",
    "partido": "PDT",
    "estado": "MA",
    "email": "dep.geovaniadesa@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204575.jpg"
  },
  {
    "id": 204,
    "deputado": "Gilberto Abramo",
    "partido": "Republicanos",
    "estado": "MG",
    "email": "dep.gervasiomaia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204491.jpg"
  },
  {
    "id": 205,
    "deputado": "Gilberto Nascimento",
    "partido": "PSC",
    "estado": "SP",
    "email": "dep.giacobo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74270.jpg"
  },
  {
    "id": 206,
    "deputado": "Gilson Marques",
    "partido": "NOVO",
    "estado": "SC",
    "email": "dep.gilcutrim@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204365.jpg"
  },
  {
    "id": 207,
    "deputado": "Giovani Cherini",
    "partido": "PL",
    "estado": "RS",
    "email": "dep.gilbertoabramo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160673.jpg"
  },
  {
    "id": 208,
    "deputado": "Giovani Feltes",
    "partido": "MDB",
    "estado": "RS",
    "email": "dep.gilbertonascimento@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178996.jpg"
  },
  {
    "id": 209,
    "deputado": "Glauber Braga",
    "partido": "PSOL",
    "estado": "RJ",
    "email": "dep.gilsonmarques@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/152605.jpg"
  },
  {
    "id": 210,
    "deputado": "Glaustin da Fokus",
    "partido": "PSC",
    "estado": "GO",
    "email": "dep.giovanicherini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204419.jpg"
  },
  {
    "id": 211,
    "deputado": "Gleisi Hoffmann",
    "partido": "PT",
    "estado": "PR",
    "email": "dep.giovanifeltes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/107283.jpg"
  },
  {
    "id": 212,
    "deputado": "Gonzaga Patriota",
    "partido": "PSB",
    "estado": "PE",
    "email": "dep.glauberbraga@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74419.jpg"
  },
  {
    "id": 213,
    "deputado": "Gorete Pereira",
    "partido": "PL",
    "estado": "CE",
    "email": "dep.glaustindafokus@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/129618.jpg"
  },
  {
    "id": 214,
    "deputado": "Greyce Elias",
    "partido": "Avante",
    "estado": "MG",
    "email": "dep.gleisihoffmann@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/198197.jpg"
  },
  {
    "id": 215,
    "deputado": "Guiga Peixoto",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.gonzagapatriota@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204513.jpg"
  },
  {
    "id": 216,
    "deputado": "Guilherme Derrite",
    "partido": "PP",
    "estado": "SP",
    "email": "dep.greyceelias@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204531.jpg"
  },
  {
    "id": 217,
    "deputado": "Guilherme Mussi",
    "partido": "PP",
    "estado": "SP",
    "email": "dep.guigapeixoto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160667.jpg"
  },
  {
    "id": 218,
    "deputado": "Gurgel",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.guilhermederrite@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204442.jpg"
  },
  {
    "id": 219,
    "deputado": "Gustavo Fruet",
    "partido": "PDT",
    "estado": "PR",
    "email": "dep.guilhermemussi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73460.jpg"
  },
  {
    "id": 220,
    "deputado": "Gustinho Ribeiro",
    "partido": "Solidariedade",
    "estado": "SE",
    "email": "dep.gurgel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204408.jpg"
  },
  {
    "id": 221,
    "deputado": "Gutemberg Reis",
    "partido": "MDB",
    "estado": "RJ",
    "email": "dep.gustavofruet@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204456.jpg"
  },
  {
    "id": 222,
    "deputado": "Haroldo Cathedral",
    "partido": "PSD",
    "estado": "RR",
    "email": "dep.gustinhoribeiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204465.jpg"
  },
  {
    "id": 223,
    "deputado": "Heitor Freire",
    "partido": "PSL",
    "estado": "CE",
    "email": "dep.gutembergreis@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204548.jpg"
  },
  {
    "id": 224,
    "deputado": "Heitor Schuch",
    "partido": "PSB",
    "estado": "RS",
    "email": "dep.haroldocathedral@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178964.jpg"
  },
  {
    "id": 225,
    "deputado": "Helder Salomão",
    "partido": "PT",
    "estado": "ES",
    "email": "dep.heitorfreire@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178873.jpg"
  },
  {
    "id": 226,
    "deputado": "Hélio Costa",
    "partido": "Republicanos",
    "estado": "SC",
    "email": "dep.heitorschuch@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204373.jpg"
  },
  {
    "id": 227,
    "deputado": "Hélio Leite",
    "partido": "DEM",
    "estado": "PA",
    "email": "dep.heldersalomao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178909.jpg"
  },
  {
    "id": 228,
    "deputado": "Helio Lopes",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.heliocosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204444.jpg"
  },
  {
    "id": 229,
    "deputado": "Henrique Fontana",
    "partido": "PT",
    "estado": "RS",
    "email": "dep.helioleite@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73482.jpg"
  },
  {
    "id": 230,
    "deputado": "Hercílio Coelho Diniz",
    "partido": "MDB",
    "estado": "MG",
    "email": "dep.heliolopes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204539.jpg"
  },
  {
    "id": 231,
    "deputado": "Herculano Passos",
    "partido": "MDB",
    "estado": "SP",
    "email": "dep.henriquefontana@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178981.jpg"
  },
  {
    "id": 232,
    "deputado": "Hermes Parcianello",
    "partido": "MDB",
    "estado": "PR",
    "email": "dep.herciliocoelhodiniz@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73772.jpg"
  },
  {
    "id": 233,
    "deputado": "Hildo Rocha",
    "partido": "MDB",
    "estado": "MA",
    "email": "dep.herculanopassos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178884.jpg"
  },
  {
    "id": 234,
    "deputado": "Hiran Gonçalves",
    "partido": "PP",
    "estado": "RR",
    "email": "dep.hermesparcianello@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178959.jpg"
  },
  {
    "id": 235,
    "deputado": "Hugo Leal",
    "partido": "PSD",
    "estado": "RJ",
    "email": "dep.hildorocha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141450.jpg"
  },
  {
    "id": 236,
    "deputado": "Hugo Motta",
    "partido": "Republicanos",
    "estado": "PB",
    "email": "dep.hirangoncalves@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160674.jpg"
  },
  {
    "id": 237,
    "deputado": "Idilvan Alencar",
    "partido": "PDT",
    "estado": "CE",
    "email": "dep.hugoleal@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204533.jpg"
  },
  {
    "id": 238,
    "deputado": "Igor Kannário",
    "partido": "DEM",
    "estado": "BA",
    "email": "dep.hugomotta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204564.jpg"
  },
  {
    "id": 239,
    "deputado": "Igor Timo",
    "partido": "PODE",
    "estado": "MG",
    "email": "dep.idilvanalencar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204508.jpg"
  },
  {
    "id": 240,
    "deputado": "Iracema Portella",
    "partido": "PP",
    "estado": "PI",
    "email": "dep.igorkannario@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/67138.jpg"
  },
  {
    "id": 241,
    "deputado": "Isnaldo Bulhões Jr.",
    "partido": "MDB",
    "estado": "AL",
    "email": "dep.igortimo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204436.jpg"
  },
  {
    "id": 242,
    "deputado": "Ivan Valente",
    "partido": "PSOL",
    "estado": "SP",
    "email": "dep.iracemaportella@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73531.jpg"
  },
  {
    "id": 243,
    "deputado": "Jandira Feghali",
    "partido": "PCdoB",
    "estado": "RJ",
    "email": "dep.isnaldobulhoesjr@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74848.jpg"
  },
  {
    "id": 244,
    "deputado": "Jaqueline Cassol",
    "partido": "PP",
    "estado": "RO",
    "email": "dep.ivanvalente@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/108338.jpg"
  },
  {
    "id": 245,
    "deputado": "Jefferson Campos",
    "partido": "PSB",
    "estado": "SP",
    "email": "dep.jandirafeghali@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74273.jpg"
  },
  {
    "id": 246,
    "deputado": "Jerônimo Goergen",
    "partido": "PP",
    "estado": "RS",
    "email": "dep.jaquelinecassol@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160570.jpg"
  },
  {
    "id": 247,
    "deputado": "Jéssica Sales",
    "partido": "MDB",
    "estado": "AC",
    "email": "dep.jeffersoncampos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178839.jpg"
  },
  {
    "id": 248,
    "deputado": "Jesus Sérgio",
    "partido": "PDT",
    "estado": "AC",
    "email": "dep.jeronimogoergen@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204435.jpg"
  },
  {
    "id": 249,
    "deputado": "Jhonatan de Jesus",
    "partido": "Republicanos",
    "estado": "RR",
    "email": "dep.jessicasales@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160531.jpg"
  },
  {
    "id": 250,
    "deputado": "João Campos",
    "partido": "Republicanos",
    "estado": "GO",
    "email": "dep.jesussergio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74366.jpg"
  },
  {
    "id": 251,
    "deputado": "João Carlos Bacelar",
    "partido": "PL",
    "estado": "BA",
    "email": "dep.jhonatandejesus@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141458.jpg"
  },
  {
    "id": 252,
    "deputado": "João Daniel",
    "partido": "PT",
    "estado": "SE",
    "email": "dep.joaocampos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178970.jpg"
  },
  {
    "id": 253,
    "deputado": "João Maia",
    "partido": "PL",
    "estado": "RN",
    "email": "dep.joaocarlosbacelar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141459.jpg"
  },
  {
    "id": 254,
    "deputado": "João Marcelo Souza",
    "partido": "MDB",
    "estado": "MA",
    "email": "dep.joaodaniel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/112437.jpg"
  },
  {
    "id": 255,
    "deputado": "João Roma",
    "partido": "Republicanos",
    "estado": "BA",
    "email": "dep.joaomaia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204576.jpg"
  },
  {
    "id": 256,
    "deputado": "Joaquim Passarinho",
    "partido": "PSD",
    "estado": "PA",
    "email": "dep.joaomarcelosouza@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178910.jpg"
  },
  {
    "id": 257,
    "deputado": "Joenia Wapichana",
    "partido": "REDE",
    "estado": "RR",
    "email": "dep.joaoroma@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204468.jpg"
  },
  {
    "id": 258,
    "deputado": "Joice Hasselmann",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.joaquimpassarinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204546.jpg"
  },
  {
    "id": 259,
    "deputado": "Jorge Braz",
    "partido": "Republicanos",
    "estado": "RJ",
    "email": "dep.joeniawapichana@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/205550.jpg"
  },
  {
    "id": 260,
    "deputado": "Jorge Goetten",
    "partido": "PL",
    "estado": "SC",
    "email": "dep.joicehasselmann@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/214694.jpg"
  },
  {
    "id": 261,
    "deputado": "Jorge Solla",
    "partido": "PT",
    "estado": "BA",
    "email": "dep.jorgebraz@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178857.jpg"
  },
  {
    "id": 262,
    "deputado": "José Airton Félix Cirilo",
    "partido": "PT",
    "estado": "CE",
    "email": "dep.jorgesolla@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141464.jpg"
  },
  {
    "id": 263,
    "deputado": "José Guimarães",
    "partido": "PT",
    "estado": "CE",
    "email": "dep.joseairtonfelixcirilo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141470.jpg"
  },
  {
    "id": 264,
    "deputado": "Jose Mario Schreiner",
    "partido": "DEM",
    "estado": "GO",
    "email": "dep.joseguimaraes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204386.jpg"
  },
  {
    "id": 265,
    "deputado": "José Medeiros",
    "partido": "PODE",
    "estado": "MT",
    "email": "dep.josemarioschreiner@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204472.jpg"
  },
  {
    "id": 266,
    "deputado": "José Nelto",
    "partido": "PODE",
    "estado": "GO",
    "email": "dep.josemedeiros@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204391.jpg"
  },
  {
    "id": 267,
    "deputado": "José Nunes",
    "partido": "PSD",
    "estado": "BA",
    "email": "dep.josenelto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160619.jpg"
  },
  {
    "id": 268,
    "deputado": "José Priante",
    "partido": "MDB",
    "estado": "PA",
    "email": "dep.josenunes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74079.jpg"
  },
  {
    "id": 269,
    "deputado": "José Ricardo",
    "partido": "PT",
    "estado": "AM",
    "email": "dep.josepriante@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204555.jpg"
  },
  {
    "id": 270,
    "deputado": "José Rocha",
    "partido": "PL",
    "estado": "BA",
    "email": "dep.josericardo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74554.jpg"
  },
  {
    "id": 271,
    "deputado": "Joseildo Ramos",
    "partido": "PT",
    "estado": "BA",
    "email": "dep.joserocha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/209189.jpg"
  },
  {
    "id": 272,
    "deputado": "Josimar Maranhãozinho",
    "partido": "PL",
    "estado": "MA",
    "email": "dep.joseildoramos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204563.jpg"
  },
  {
    "id": 273,
    "deputado": "Josivaldo JP",
    "partido": "PODE",
    "estado": "MA",
    "email": "dep.josimarmaranhaozinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/pages/dn/gz/q7/0e/o2/40/outros-candidatos.png"
  },
  {
    "id": 274,
    "deputado": "Juarez Costa",
    "partido": "MDB",
    "estado": "MT",
    "email": "dep.josivaldojp@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204474.jpg"
  },
  {
    "id": 275,
    "deputado": "Julian Lemos",
    "partido": "PSL",
    "estado": "PB",
    "email": "dep.juarezcosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204420.jpg"
  },
  {
    "id": 276,
    "deputado": "Júlio Cesar",
    "partido": "PSD",
    "estado": "PI",
    "email": "dep.julianlemos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74317.jpg"
  },
  {
    "id": 277,
    "deputado": "Julio Cesar Ribeiro",
    "partido": "Republicanos",
    "estado": "DF",
    "email": "dep.juliocesar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204372.jpg"
  },
  {
    "id": 278,
    "deputado": "Júlio Delgado",
    "partido": "PSB",
    "estado": "MG",
    "email": "dep.juliocesarribeiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73586.jpg"
  },
  {
    "id": 279,
    "deputado": "Juninho do Pneu",
    "partido": "DEM",
    "estado": "RJ",
    "email": "dep.juliodelgado@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204457.jpg"
  },
  {
    "id": 280,
    "deputado": "Junio Amaral",
    "partido": "PSL",
    "estado": "MG",
    "email": "dep.juninhodopneu@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204520.jpg"
  },
  {
    "id": 281,
    "deputado": "Júnior Ferrari",
    "partido": "PSD",
    "estado": "PA",
    "email": "dep.junioamaral@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204497.jpg"
  },
  {
    "id": 282,
    "deputado": "Junior Lourenço",
    "partido": "PL",
    "estado": "MA",
    "email": "dep.juniorferrari@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204574.jpg"
  },
  {
    "id": 283,
    "deputado": "Júnior Mano",
    "partido": "PL",
    "estado": "CE",
    "email": "dep.juniorlourenco@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204550.jpg"
  },
  {
    "id": 284,
    "deputado": "Juscelino Filho",
    "partido": "DEM",
    "estado": "MA",
    "email": "dep.juniormano@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178886.jpg"
  },
  {
    "id": 285,
    "deputado": "Kim Kataguiri",
    "partido": "DEM",
    "estado": "SP",
    "email": "dep.juscelinofilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204536.jpg"
  },
  {
    "id": 286,
    "deputado": "Laercio Oliveira",
    "partido": "PP",
    "estado": "SE",
    "email": "dep.kimkataguiri@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/151208.jpg"
  },
  {
    "id": 287,
    "deputado": "Lafayette de Andrada",
    "partido": "Republicanos",
    "estado": "MG",
    "email": "dep.laerciooliveira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/98057.jpg"
  },
  {
    "id": 288,
    "deputado": "Lauriete",
    "partido": "PSC",
    "estado": "ES",
    "email": "dep.lafayettedeandrada@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160534.jpg"
  },
  {
    "id": 289,
    "deputado": "Leandre",
    "partido": "PV",
    "estado": "PR",
    "email": "dep.lauriete@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178832.jpg"
  },
  {
    "id": 290,
    "deputado": "Leda Sadala",
    "partido": "Avante",
    "estado": "AP",
    "email": "dep.leandre@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204375.jpg"
  },
  {
    "id": 291,
    "deputado": "Leo de Brito",
    "partido": "PT",
    "estado": "AC",
    "email": "dep.ledasadala@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178825.jpg"
  },
  {
    "id": 292,
    "deputado": "Léo Moraes",
    "partido": "PODE",
    "estado": "RO",
    "email": "dep.leodebrito@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204359.jpg"
  },
  {
    "id": 293,
    "deputado": "Léo Motta",
    "partido": "PSL",
    "estado": "MG",
    "email": "dep.leomoraes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204547.jpg"
  },
  {
    "id": 294,
    "deputado": "Leonardo Monteiro",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.leomotta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74156.jpg"
  },
  {
    "id": 295,
    "deputado": "Leônidas Cristino",
    "partido": "PDT",
    "estado": "CE",
    "email": "dep.leonardomonteiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74299.jpg"
  },
  {
    "id": 296,
    "deputado": "Leur Lomanto Júnior",
    "partido": "DEM",
    "estado": "BA",
    "email": "dep.leonidascristino@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/92102.jpg"
  },
  {
    "id": 297,
    "deputado": "Lídice da Mata",
    "partido": "PSB",
    "estado": "BA",
    "email": "dep.leurlomantojunior@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/139285.jpg"
  },
  {
    "id": 298,
    "deputado": "Lincoln Portela",
    "partido": "PL",
    "estado": "MG",
    "email": "dep.lidicedamata@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74585.jpg"
  },
  {
    "id": 299,
    "deputado": "Liziane Bayer",
    "partido": "PSB",
    "estado": "RS",
    "email": "dep.lincolnportela@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204405.jpg"
  },
  {
    "id": 300,
    "deputado": "Loester Trutis",
    "partido": "PSL",
    "estado": "MS",
    "email": "dep.lizianebayer@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204382.jpg"
  },
  {
    "id": 301,
    "deputado": "Lourival Gomes",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.loestertrutis@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/196358.jpg"
  },
  {
    "id": 302,
    "deputado": "Lucas Gonzalez",
    "partido": "NOVO",
    "estado": "MG",
    "email": "dep.lourivalgomes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204523.jpg"
  },
  {
    "id": 303,
    "deputado": "Lucas Redecker",
    "partido": "PSDB",
    "estado": "RS",
    "email": "dep.lucasgonzalez@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204404.jpg"
  },
  {
    "id": 304,
    "deputado": "Lucas Vergilio",
    "partido": "Solidariedade",
    "estado": "GO",
    "email": "dep.lucasredecker@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178879.jpg"
  },
  {
    "id": 305,
    "deputado": "Luciano Bivar",
    "partido": "PSL",
    "estado": "PE",
    "email": "dep.lucasvergilio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74478.jpg"
  },
  {
    "id": 306,
    "deputado": "Luciano Ducci",
    "partido": "PSB",
    "estado": "PR",
    "email": "dep.lucianobivar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178931.jpg"
  },
  {
    "id": 307,
    "deputado": "Lucio Mosquini",
    "partido": "MDB",
    "estado": "RO",
    "email": "dep.lucianoducci@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178954.jpg"
  },
  {
    "id": 308,
    "deputado": "Luis Miranda",
    "partido": "DEM",
    "estado": "DF",
    "email": "dep.luciomosquini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204381.jpg"
  },
  {
    "id": 309,
    "deputado": "Luis Tibé",
    "partido": "Avante",
    "estado": "MG",
    "email": "dep.luismiranda@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160510.jpg"
  },
  {
    "id": 310,
    "deputado": "Luisa Canziani",
    "partido": "PTB",
    "estado": "PR",
    "email": "dep.luistibe@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204410.jpg"
  },
  {
    "id": 311,
    "deputado": "Luiz Antônio Corrêa",
    "partido": "PL",
    "estado": "RJ",
    "email": "dep.luisacanziani@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204448.jpg"
  },
  {
    "id": 312,
    "deputado": "Luiz Carlos",
    "partido": "PSDB",
    "estado": "AP",
    "email": "dep.luizantoniocorrea@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160645.jpg"
  },
  {
    "id": 313,
    "deputado": "Luiz Carlos Motta",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.luizcarlos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204485.jpg"
  },
  {
    "id": 314,
    "deputado": "Luiz Lima",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.luizcarlosmotta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204455.jpg"
  },
  {
    "id": 315,
    "deputado": "Luiz Nishimori",
    "partido": "PL",
    "estado": "PR",
    "email": "dep.luizlima@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/162332.jpg"
  },
  {
    "id": 316,
    "deputado": "Luiz Philippe de Orleans e Bragança",
    "partido": "PSL",
    "estado": "SP",
    "email": "dep.luiznishimori@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204526.jpg"
  },
  {
    "id": 317,
    "deputado": "Luiza Erundina",
    "partido": "PSOL",
    "estado": "SP",
    "email": "dep.luizphilippedeorleansebraganca@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74784.jpg"
  },
  {
    "id": 318,
    "deputado": "Luizão Goulart",
    "partido": "Republicanos",
    "estado": "PR",
    "email": "dep.luizaerundina@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204418.jpg"
  },
  {
    "id": 319,
    "deputado": "Magda Mofatto",
    "partido": "PL",
    "estado": "GO",
    "email": "dep.luizaogoulart@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/166402.jpg"
  },
  {
    "id": 320,
    "deputado": "Major Fabiana",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.magdamofatto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204458.jpg"
  },
  {
    "id": 321,
    "deputado": "Mara Rocha",
    "partido": "PSDB",
    "estado": "AC",
    "email": "dep.majorfabiana@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204471.jpg"
  },
  {
    "id": 322,
    "deputado": "Marcel van Hattem",
    "partido": "NOVO",
    "estado": "RS",
    "email": "dep.mararocha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/156190.jpg"
  },
  {
    "id": 323,
    "deputado": "Marcelo Álvaro Antônio",
    "partido": "PSL",
    "estado": "MG",
    "email": "dep.marcelvanhattem@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/179000.jpg"
  },
  {
    "id": 324,
    "deputado": "Marcelo Aro",
    "partido": "PP",
    "estado": "MG",
    "email": "dep.marceloalvaroantonio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/146788.jpg"
  },
  {
    "id": 325,
    "deputado": "Marcelo Calero",
    "partido": "Cidadania",
    "estado": "RJ",
    "email": "dep.marceloaro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204433.jpg"
  },
  {
    "id": 326,
    "deputado": "Marcelo Freixo",
    "partido": "PSOL",
    "estado": "RJ",
    "email": "dep.marcelobrum@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/76874.jpg"
  },
  {
    "id": 327,
    "deputado": "Marcelo Moraes",
    "partido": "PTB",
    "estado": "RS",
    "email": "dep.marcelofreixo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/133810.jpg"
  },
  {
    "id": 328,
    "deputado": "Marcelo Nilo",
    "partido": "PSB",
    "estado": "BA",
    "email": "dep.marcelomoraes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204558.jpg"
  },
  {
    "id": 329,
    "deputado": "Marcelo Ramos",
    "partido": "PL",
    "estado": "AM",
    "email": "dep.marcelonilo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204556.jpg"
  },
  {
    "id": 330,
    "deputado": "Marcio Alvino",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.marceloramos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178983.jpg"
  },
  {
    "id": 331,
    "deputado": "Márcio Biolchi",
    "partido": "MDB",
    "estado": "RS",
    "email": "dep.marcioalvino@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/179001.jpg"
  },
  {
    "id": 332,
    "deputado": "Marcio Jerry",
    "partido": "PCdoB",
    "estado": "MA",
    "email": "dep.marciobiolchi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/81055.jpg"
  },
  {
    "id": 333,
    "deputado": "Márcio Labre",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.marciolabre@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204452.jpg"
  },
  {
    "id": 334,
    "deputado": "Márcio Marinho",
    "partido": "Republicanos",
    "estado": "BA",
    "email": "dep.marciomarinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/150418.jpg"
  },
  {
    "id": 335,
    "deputado": "Marco Bertaiolli",
    "partido": "PSD",
    "estado": "SP",
    "email": "dep.marcobertaiolli@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204522.jpg"
  },
  {
    "id": 336,
    "deputado": "Marcon",
    "partido": "PT",
    "estado": "RS",
    "email": "dep.marcon@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160535.jpg"
  },
  {
    "id": 337,
    "deputado": "Marcos Aurélio Sampaio",
    "partido": "MDB",
    "estado": "PI",
    "email": "dep.marcosaureliosampaio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204431.jpg"
  },
  {
    "id": 338,
    "deputado": "Marcos Pereira",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.marcospereira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204506.jpg"
  },
  {
    "id": 339,
    "deputado": "Margarete Coelho",
    "partido": "PP",
    "estado": "PI",
    "email": "dep.marcossoares@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204430.jpg"
  },
  {
    "id": 340,
    "deputado": "Maria do Rosário",
    "partido": "PT",
    "estado": "RS",
    "email": "dep.margaretecoelho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74398.jpg"
  },
  {
    "id": 341,
    "deputado": "Maria Rosas",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.mariadorosario@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204540.jpg"
  },
  {
    "id": 342,
    "deputado": "Mariana Carvalho",
    "partido": "PSDB",
    "estado": "RO",
    "email": "dep.mariarosas@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178956.jpg"
  },
  {
    "id": 343,
    "deputado": "Marília Arraes",
    "partido": "PT",
    "estado": "PE",
    "email": "dep.marianacarvalho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204428.jpg"
  },
  {
    "id": 344,
    "deputado": "Marina Santos",
    "partido": "Solidariedade",
    "estado": "PI",
    "email": "dep.mariliaarraes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204432.jpg"
  },
  {
    "id": 345,
    "deputado": "Mário Heringer",
    "partido": "PDT",
    "estado": "MG",
    "email": "dep.marinasantos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74158.jpg"
  },
  {
    "id": 346,
    "deputado": "Mário Negromonte Jr.",
    "partido": "PP",
    "estado": "BA",
    "email": "dep.marioheringer@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178858.jpg"
  },
  {
    "id": 347,
    "deputado": "Marlon Santos",
    "partido": "PDT",
    "estado": "RS",
    "email": "dep.marionegromontejr@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204403.jpg"
  },
  {
    "id": 348,
    "deputado": "Marreca Filho",
    "partido": "Patriota",
    "estado": "MA",
    "email": "dep.marlonsantos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204566.jpg"
  },
  {
    "id": 349,
    "deputado": "Marx Beltrão",
    "partido": "PSD",
    "estado": "AL",
    "email": "dep.marrecafilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178843.jpg"
  },
  {
    "id": 350,
    "deputado": "Maurício Dziedricki",
    "partido": "PTB",
    "estado": "RS",
    "email": "dep.marxbeltrao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/75431.jpg"
  },
  {
    "id": 351,
    "deputado": "Mauro Lopes",
    "partido": "MDB",
    "estado": "MG",
    "email": "dep.mauriciodziedricki@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74749.jpg"
  },
  {
    "id": 352,
    "deputado": "Mauro Nazif",
    "partido": "PSB",
    "estado": "RO",
    "email": "dep.maurolopes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141508.jpg"
  },
  {
    "id": 353,
    "deputado": "Merlong Solano",
    "partido": "PT",
    "estado": "PI",
    "email": "dep.mauronazif@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/188097.jpg"
  },
  {
    "id": 354,
    "deputado": "Miguel Lombardi",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.merlongsolano@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178985.jpg"
  },
  {
    "id": 355,
    "deputado": "Milton Coelho",
    "partido": "PSB",
    "estado": "PE",
    "email": "dep.miguellombardi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/92172.jpg"
  },
  {
    "id": 356,
    "deputado": "Milton Vieira",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.miltoncoelho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/154178.jpg"
  },
  {
    "id": 357,
    "deputado": "Misael Varella",
    "partido": "PSD",
    "estado": "MG",
    "email": "dep.miltonvieira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178895.jpg"
  },
  {
    "id": 358,
    "deputado": "Moses Rodrigues",
    "partido": "MDB",
    "estado": "CE",
    "email": "dep.misaelvarella@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178997.jpg"
  },
  {
    "id": 359,
    "deputado": "Natália Bonavides",
    "partido": "PT",
    "estado": "RN",
    "email": "dep.mosesrodrigues@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204453.jpg"
  },
  {
    "id": 360,
    "deputado": "Nelson Barbudo",
    "partido": "PSL",
    "estado": "MT",
    "email": "dep.nataliabonavides@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204449.jpg"
  },
  {
    "id": 361,
    "deputado": "Nereu Crispim",
    "partido": "PSL",
    "estado": "RS",
    "email": "dep.nelsonbarbudo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204415.jpg"
  },
  {
    "id": 362,
    "deputado": "Neri Geller",
    "partido": "PP",
    "estado": "MT",
    "email": "dep.nereucrispim@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/146307.jpg"
  },
  {
    "id": 363,
    "deputado": "Neucimar Fraga",
    "partido": "PSD",
    "estado": "ES",
    "email": "dep.nerigeller@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74165.jpg"
  },
  {
    "id": 364,
    "deputado": "Newton Cardoso Jr",
    "partido": "MDB",
    "estado": "MG",
    "email": "dep.neucimarfraga@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178896.jpg"
  },
  {
    "id": 365,
    "deputado": "Nicoletti",
    "partido": "PSL",
    "estado": "RR",
    "email": "dep.newtoncardosojr@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204479.jpg"
  },
  {
    "id": 366,
    "deputado": "Nilson Pinto",
    "partido": "PSDB",
    "estado": "PA",
    "email": "dep.nicoletti@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74352.jpg"
  },
  {
    "id": 367,
    "deputado": "Nilto Tatto",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.nilsonpinto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178986.jpg"
  },
  {
    "id": 368,
    "deputado": "Nivaldo Albuquerque",
    "partido": "PTB",
    "estado": "AL",
    "email": "dep.niltotatto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/194260.jpg"
  },
  {
    "id": 369,
    "deputado": "Norma Ayub",
    "partido": "DEM",
    "estado": "ES",
    "email": "dep.nivaldoalbuquerque@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/66179.jpg"
  },
  {
    "id": 370,
    "deputado": "Odair Cunha",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.normaayub@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74159.jpg"
  },
  {
    "id": 371,
    "deputado": "Olival Marques",
    "partido": "DEM",
    "estado": "PA",
    "email": "dep.odaircunha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204498.jpg"
  },
  {
    "id": 372,
    "deputado": "Onyx Lorenzoni",
    "partido": "DEM",
    "estado": "RS",
    "email": "dep.olivalmarques@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74399.jpg"
  },
  {
    "id": 373,
    "deputado": "Orlando Silva",
    "partido": "PCdoB",
    "estado": "SP",
    "email": "dep.orlandosilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178987.jpg"
  },
  {
    "id": 374,
    "deputado": "Osires Damaso",
    "partido": "PSC",
    "estado": "TO",
    "email": "dep.osiresdamaso@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204363.jpg"
  },
  {
    "id": 375,
    "deputado": "Osmar Terra",
    "partido": "MDB",
    "estado": "RS",
    "email": "dep.osmarterra@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73692.jpg"
  },
  {
    "id": 376,
    "deputado": "Ossesio Silva",
    "partido": "Republicanos",
    "estado": "PE",
    "email": "dep.ossesiosilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204422.jpg"
  },
  {
    "id": 377,
    "deputado": "Otoni de Paula",
    "partido": "PSC",
    "estado": "RJ",
    "email": "dep.otavioleite@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204441.jpg"
  },
  {
    "id": 378,
    "deputado": "Ottaci Nascimento",
    "partido": "Solidariedade",
    "estado": "RR",
    "email": "dep.otonidepaula@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204475.jpg"
  },
  {
    "id": 379,
    "deputado": "Otto Alencar Filho",
    "partido": "PSD",
    "estado": "BA",
    "email": "dep.ottacinascimento@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204573.jpg"
  },
  {
    "id": 380,
    "deputado": "Padre João",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.ottoalencarfilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160556.jpg"
  },
  {
    "id": 381,
    "deputado": "Pastor Eurico",
    "partido": "Patriota",
    "estado": "PE",
    "email": "dep.padrejoao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160642.jpg"
  },
  {
    "id": 382,
    "deputado": "Pastor Gil",
    "partido": "PL",
    "estado": "MA",
    "email": "dep.pastoreurico@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204570.jpg"
  },
  {
    "id": 383,
    "deputado": "Pastor Sargento Isidório",
    "partido": "Avante",
    "estado": "BA",
    "email": "dep.pastorgil@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204553.jpg"
  },
  {
    "id": 384,
    "deputado": "Patrus Ananias",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.pastorsargentoisidorio@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74160.jpg"
  },
  {
    "id": 385,
    "deputado": "Paula Belmonte",
    "partido": "Cidadania",
    "estado": "DF",
    "email": "dep.patrusananias@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204377.jpg"
  },
  {
    "id": 386,
    "deputado": "Paulão",
    "partido": "PT",
    "estado": "AL",
    "email": "dep.paulabelmonte@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/171617.jpg"
  },
  {
    "id": 387,
    "deputado": "Paulo Abi-Ackel",
    "partido": "PSDB",
    "estado": "MG",
    "email": "dep.paulao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141516.jpg"
  },
  {
    "id": 388,
    "deputado": "Paulo Azi",
    "partido": "DEM",
    "estado": "BA",
    "email": "dep.pauloabiackel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178860.jpg"
  },
  {
    "id": 389,
    "deputado": "Paulo Bengtson",
    "partido": "PTB",
    "estado": "PA",
    "email": "dep.pauloazi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204538.jpg"
  },
  {
    "id": 390,
    "deputado": "Paulo Eduardo Martins",
    "partido": "PSC",
    "estado": "PR",
    "email": "dep.paulobengtson@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/193726.jpg"
  },
  {
    "id": 391,
    "deputado": "Paulo Freire Costa",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.pauloeduardomartins@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160558.jpg"
  },
  {
    "id": 392,
    "deputado": "Paulo Ganime",
    "partido": "NOVO",
    "estado": "RJ",
    "email": "dep.paulofreirecosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204461.jpg"
  },
  {
    "id": 393,
    "deputado": "Paulo Guedes",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.pauloganime@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204492.jpg"
  },
  {
    "id": 394,
    "deputado": "Paulo Magalhães",
    "partido": "PSD",
    "estado": "BA",
    "email": "dep.pauloguedes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74574.jpg"
  },
  {
    "id": 395,
    "deputado": "Paulo Pereira da Silva",
    "partido": "Solidariedade",
    "estado": "SP",
    "email": "dep.paulomagalhaes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141518.jpg"
  },
  {
    "id": 396,
    "deputado": "Paulo Pimenta",
    "partido": "PT",
    "estado": "RS",
    "email": "dep.paulopereiradasilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74400.jpg"
  },
  {
    "id": 397,
    "deputado": "Paulo Ramos",
    "partido": "PDT",
    "estado": "RJ",
    "email": "dep.paulopimenta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/133968.jpg"
  },
  {
    "id": 398,
    "deputado": "Paulo Teixeira",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.pauloramos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141488.jpg"
  },
  {
    "id": 399,
    "deputado": "Pedro Augusto",
    "partido": "PSD",
    "estado": "RJ",
    "email": "dep.pauloteixeira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/pages/dn/gz/q7/0e/o2/40/outros-candidatos.png"
  },
  {
    "id": 400,
    "deputado": "Pedro Augusto Bezerra",
    "partido": "PTB",
    "estado": "CE",
    "email": "dep.pedroaugustobezerra@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/90201.jpg"
  },
  {
    "id": 401,
    "deputado": "Pedro Cunha Lima",
    "partido": "PSDB",
    "estado": "PB",
    "email": "dep.pedroaugustopalareti@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178912.jpg"
  },
  {
    "id": 402,
    "deputado": "Pedro Lucas Fernandes",
    "partido": "PTB",
    "estado": "MA",
    "email": "dep.pedrocunhalima@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/122974.jpg"
  },
  {
    "id": 403,
    "deputado": "Pedro Lupion",
    "partido": "DEM",
    "estado": "PR",
    "email": "dep.pedrolucasfernandes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204395.jpg"
  },
  {
    "id": 404,
    "deputado": "Pedro Paulo",
    "partido": "DEM",
    "estado": "RJ",
    "email": "dep.pedrolupion@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/122158.jpg"
  },
  {
    "id": 405,
    "deputado": "Pedro Uczai",
    "partido": "PT",
    "estado": "SC",
    "email": "dep.pedrouczai@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160604.jpg"
  },
  {
    "id": 406,
    "deputado": "Pedro Vilela",
    "partido": "PSDB",
    "estado": "AL",
    "email": "dep.pedrovilela@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178844.jpg"
  },
  {
    "id": 407,
    "deputado": "Pedro Westphalen",
    "partido": "PP",
    "estado": "RS",
    "email": "dep.pedrowestphalen@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204406.jpg"
  },
  {
    "id": 408,
    "deputado": "Perpétua Almeida",
    "partido": "PCdoB",
    "estado": "AC",
    "email": "dep.perpetuaalmeida@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73943.jpg"
  },
  {
    "id": 409,
    "deputado": "Pinheirinho",
    "partido": "PP",
    "estado": "MG",
    "email": "dep.pinheirinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204524.jpg"
  },
  {
    "id": 410,
    "deputado": "Policial Katia Sastre",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.policialkatiasastre@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204529.jpg"
  },
  {
    "id": 411,
    "deputado": "Pompeo de Mattos",
    "partido": "PDT",
    "estado": "RS",
    "email": "dep.pompeodemattos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73486.jpg"
  },
  {
    "id": 412,
    "deputado": "Pr. Marco Feliciano",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.pr.marcofeliciano@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160601.jpg"
  },
  {
    "id": 413,
    "deputado": "Professor Alcides",
    "partido": "PP",
    "estado": "GO",
    "email": "dep.professoralcides@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204390.jpg"
  },
  {
    "id": 414,
    "deputado": "Professor Israel Batista",
    "partido": "PV",
    "estado": "DF",
    "email": "dep.professorisraelbatista@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204383.jpg"
  },
  {
    "id": 415,
    "deputado": "Professor Joziel",
    "partido": "PSL",
    "estado": "RJ",
    "email": "dep.professorjoziel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204446.jpg"
  },
  {
    "id": 416,
    "deputado": "Professora Dayane Pimentel",
    "partido": "PSL",
    "estado": "BA",
    "email": "dep.professoradayanepimentel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204565.jpg"
  },
  {
    "id": 417,
    "deputado": "Professora Dorinha Seabra Rezende",
    "partido": "DEM",
    "estado": "TO",
    "email": "dep.professoradorinhaseabrarezende@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160639.jpg"
  },
  {
    "id": 418,
    "deputado": "Professora Marcivania",
    "partido": "PCdoB",
    "estado": "AP",
    "email": "dep.professoramarcivania@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160641.jpg"
  },
  {
    "id": 419,
    "deputado": "Professora Rosa Neide",
    "partido": "PT",
    "estado": "MT",
    "email": "dep.professorarosaneide@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204467.jpg"
  },
  {
    "id": 420,
    "deputado": "Rafael Motta",
    "partido": "PSB",
    "estado": "RN",
    "email": "dep.rachelmarques@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178951.jpg"
  },
  {
    "id": 421,
    "deputado": "Raimundo Costa",
    "partido": "PL",
    "estado": "BA",
    "email": "dep.rafaelmotta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204567.jpg"
  },
  {
    "id": 422,
    "deputado": "Raul Henry",
    "partido": "MDB",
    "estado": "PE",
    "email": "dep.raimundocosta@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141523.jpg"
  },
  {
    "id": 423,
    "deputado": "Reginaldo Lopes",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.raulhenry@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74161.jpg"
  },
  {
    "id": 424,
    "deputado": "Reinhold Stephanes Junior",
    "partido": "PSD",
    "estado": "PR",
    "email": "dep.reginaldolopes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/205865.jpg"
  },
  {
    "id": 425,
    "deputado": "Rejane Dias",
    "partido": "PT",
    "estado": "PI",
    "email": "dep.reinholdstephanesjunior@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178925.jpg"
  },
  {
    "id": 426,
    "deputado": "Renata Abreu",
    "partido": "PODE",
    "estado": "SP",
    "email": "dep.rejanedias@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178989.jpg"
  },
  {
    "id": 427,
    "deputado": "Renildo Calheiros",
    "partido": "PCdoB",
    "estado": "PE",
    "email": "dep.renataabreu@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73801.jpg"
  },
  {
    "id": 428,
    "deputado": "Ricardo Barros",
    "partido": "PP",
    "estado": "PR",
    "email": "dep.renildocalheiros@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73788.jpg"
  },
  {
    "id": 429,
    "deputado": "Ricardo da Karol",
    "partido": "PSC",
    "estado": "RJ",
    "email": "dep.ricardobarros@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/pages/dn/gz/q7/0e/o2/40/outros-candidatos.png"
  },
  {
    "id": 430,
    "deputado": "Ricardo Guidi",
    "partido": "PSD",
    "estado": "SC",
    "email": "dep.ricardodakarol@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204362.jpg"
  },
  {
    "id": 431,
    "deputado": "Ricardo Izar",
    "partido": "PP",
    "estado": "SP",
    "email": "dep.ricardoguidi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160655.jpg"
  },
  {
    "id": 432,
    "deputado": "Ricardo Silva",
    "partido": "PSB",
    "estado": "SP",
    "email": "dep.ricardoizar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/213274.jpg"
  },
  {
    "id": 433,
    "deputado": "Ricardo Teobaldo",
    "partido": "PODE",
    "estado": "PE",
    "email": "dep.ricardosilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178920.jpg"
  },
  {
    "id": 434,
    "deputado": "Robério Monteiro",
    "partido": "PDT",
    "estado": "CE",
    "email": "dep.ricardoteobaldo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204489.jpg"
  },
  {
    "id": 435,
    "deputado": "Roberto Alves",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.roberiomonteiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/152610.jpg"
  },
  {
    "id": 436,
    "deputado": "Roberto de Lucena",
    "partido": "PODE",
    "estado": "SP",
    "email": "dep.robertoalves@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160653.jpg"
  },
  {
    "id": 437,
    "deputado": "Rodrigo Agostinho",
    "partido": "PSB",
    "estado": "SP",
    "email": "dep.robertodelucena@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204530.jpg"
  },
  {
    "id": 438,
    "deputado": "Rodrigo Coelho",
    "partido": "PSB",
    "estado": "SC",
    "email": "dep.rodrigoagostinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204366.jpg"
  },
  {
    "id": 439,
    "deputado": "Rodrigo de Castro",
    "partido": "PSDB",
    "estado": "MG",
    "email": "dep.rodrigocoelho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141531.jpg"
  },
  {
    "id": 440,
    "deputado": "Rodrigo Maia",
    "partido": "DEM",
    "estado": "RJ",
    "email": "dep.rodrigodecastro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74693.jpg"
  },
  {
    "id": 441,
    "deputado": "Rogério Correia",
    "partido": "PT",
    "estado": "MG",
    "email": "dep.rodrigomaia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204480.jpg"
  },
  {
    "id": 442,
    "deputado": "Roman",
    "partido": "Patriota",
    "estado": "PR",
    "email": "dep.rogeriocorreia@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178930.jpg"
  },
  {
    "id": 443,
    "deputado": "Ronaldo Carletto",
    "partido": "PP",
    "estado": "BA",
    "email": "dep.rogeriopeninhamendonca@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178861.jpg"
  },
  {
    "id": 444,
    "deputado": "Rosana Valle",
    "partido": "PSB",
    "estado": "SP",
    "email": "dep.roman@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204525.jpg"
  },
  {
    "id": 445,
    "deputado": "Rosangela Gomes",
    "partido": "Republicanos",
    "estado": "RJ",
    "email": "dep.ronaldocarletto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178945.jpg"
  },
  {
    "id": 446,
    "deputado": "Rose Modesto",
    "partido": "PSDB",
    "estado": "MS",
    "email": "dep.rosanavalle@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204357.jpg"
  },
  {
    "id": 447,
    "deputado": "Rubens Bueno",
    "partido": "Cidadania",
    "estado": "PR",
    "email": "dep.rosangelagomes@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73466.jpg"
  },
  {
    "id": 448,
    "deputado": "Rubens Otoni",
    "partido": "PT",
    "estado": "GO",
    "email": "dep.rosemodesto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74371.jpg"
  },
  {
    "id": 449,
    "deputado": "Rubens Pereira Junior",
    "partido": "PCdoB",
    "estado": "MA",
    "email": "dep.rubensbueno@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178887.jpg"
  },
  {
    "id": 450,
    "deputado": "Rui Falcão",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.rubensotoni@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73604.jpg"
  },
  {
    "id": 451,
    "deputado": "Ruy Carneiro",
    "partido": "PSDB",
    "estado": "PB",
    "email": "dep.ruifalcao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160635.jpg"
  },
  {
    "id": 452,
    "deputado": "Sâmia Bomfim",
    "partido": "PSOL",
    "estado": "SP",
    "email": "dep.ruycarneiro@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204535.jpg"
  },
  {
    "id": 453,
    "deputado": "Samuel Moreira",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.samiabomfim@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178990.jpg"
  },
  {
    "id": 454,
    "deputado": "Sanderson",
    "partido": "PSL",
    "estado": "RS",
    "email": "dep.samuelmoreira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204416.jpg"
  },
  {
    "id": 455,
    "deputado": "Santini",
    "partido": "PTB",
    "estado": "RS",
    "email": "dep.sanderson@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/90842.jpg"
  },
  {
    "id": 456,
    "deputado": "Sargento Fahur",
    "partido": "PSD",
    "estado": "PR",
    "email": "dep.santini@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204387.jpg"
  },
  {
    "id": 457,
    "deputado": "Schiavinato",
    "partido": "PP",
    "estado": "PR",
    "email": "dep.sargentofahur@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204399.jpg"
  },
  {
    "id": 458,
    "deputado": "Sebastião Oliveira",
    "partido": "Avante",
    "estado": "PE",
    "email": "dep.schiavinato@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178921.jpg"
  },
  {
    "id": 459,
    "deputado": "Sérgio Brito",
    "partido": "PSD",
    "estado": "BA",
    "email": "dep.sebastiaooliveira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/73808.jpg"
  },
  {
    "id": 460,
    "deputado": "Sergio Souza",
    "partido": "MDB",
    "estado": "PR",
    "email": "dep.sergiobrito@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178933.jpg"
  },
  {
    "id": 461,
    "deputado": "Sergio Toledo",
    "partido": "PL",
    "estado": "AL",
    "email": "dep.sergiosouza@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204438.jpg"
  },
  {
    "id": 462,
    "deputado": "Severino Pessoa",
    "partido": "Republicanos",
    "estado": "AL",
    "email": "dep.sergiotoledo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204437.jpg"
  },
  {
    "id": 463,
    "deputado": "Shéridan",
    "partido": "PSDB",
    "estado": "RR",
    "email": "dep.severinopessoa@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178961.jpg"
  },
  {
    "id": 464,
    "deputado": "Sidney Leite",
    "partido": "PSD",
    "estado": "AM",
    "email": "dep.sheridan@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204557.jpg"
  },
  {
    "id": 465,
    "deputado": "Silas Câmara",
    "partido": "Republicanos",
    "estado": "AM",
    "email": "dep.sidneyleite@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74356.jpg"
  },
  {
    "id": 466,
    "deputado": "Silvia Cristina",
    "partido": "PDT",
    "estado": "RO",
    "email": "dep.silascamara@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204360.jpg"
  },
  {
    "id": 467,
    "deputado": "Silvio Costa Filho",
    "partido": "Republicanos",
    "estado": "PE",
    "email": "dep.silviacristina@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204425.jpg"
  },
  {
    "id": 468,
    "deputado": "Soraya Santos",
    "partido": "PL",
    "estado": "RJ",
    "email": "dep.silviocostafilho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178946.jpg"
  },
  {
    "id": 469,
    "deputado": "Sóstenes Cavalcante",
    "partido": "DEM",
    "estado": "RJ",
    "email": "dep.sorayasantos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178947.jpg"
  },
  {
    "id": 470,
    "deputado": "Stefano Aguiar",
    "partido": "PSD",
    "estado": "MG",
    "email": "dep.sostenescavalcante@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/92776.jpg"
  },
  {
    "id": 471,
    "deputado": "Subtenente Gonzaga",
    "partido": "PDT",
    "estado": "MG",
    "email": "dep.stefanoaguiar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/177282.jpg"
  },
  {
    "id": 472,
    "deputado": "Tabata Amaral",
    "partido": "PDT",
    "estado": "SP",
    "email": "dep.subtenentegonzaga@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204534.jpg"
  },
  {
    "id": 473,
    "deputado": "Tadeu Alencar",
    "partido": "PSB",
    "estado": "PE",
    "email": "dep.tabataamaral@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178922.jpg"
  },
  {
    "id": 474,
    "deputado": "Talíria Petrone",
    "partido": "PSOL",
    "estado": "RJ",
    "email": "dep.tadeualencar@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204464.jpg"
  },
  {
    "id": 475,
    "deputado": "Ted Conti",
    "partido": "PSB",
    "estado": "ES",
    "email": "dep.taliriapetrone@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/206231.jpg"
  },
  {
    "id": 476,
    "deputado": "Tereza Cristina",
    "partido": "DEM",
    "estado": "MS",
    "email": "dep.tedconti@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178901.jpg"
  },
  {
    "id": 477,
    "deputado": "Tereza Nelma",
    "partido": "PSDB",
    "estado": "AL",
    "email": "dep.terezanelma@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204466.jpg"
  },
  {
    "id": 478,
    "deputado": "Tiago Dimas",
    "partido": "Solidariedade",
    "estado": "TO",
    "email": "dep.tiagodimas@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/143084.jpg"
  },
  {
    "id": 479,
    "deputado": "Tiago Mitraud",
    "partido": "NOVO",
    "estado": "MG",
    "email": "dep.tiagomitraud@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204519.jpg"
  },
  {
    "id": 480,
    "deputado": "Tiririca",
    "partido": "PL",
    "estado": "SP",
    "email": "dep.tiririca@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160976.jpg"
  },
  {
    "id": 481,
    "deputado": "Tito",
    "partido": "Avante",
    "estado": "BA",
    "email": "dep.tito@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/197438.jpg"
  },
  {
    "id": 482,
    "deputado": "Toninho Wandscheer",
    "partido": "PROS",
    "estado": "PR",
    "email": "dep.toninhowandscheer@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178934.jpg"
  },
  {
    "id": 483,
    "deputado": "Túlio Gadêlha",
    "partido": "PDT",
    "estado": "PE",
    "email": "dep.tuliogadelha@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/157130.jpg"
  },
  {
    "id": 484,
    "deputado": "Uldurico Junior",
    "partido": "PROS",
    "estado": "BA",
    "email": "dep.ulduricojunior@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178863.jpg"
  },
  {
    "id": 485,
    "deputado": "Vaidon Oliveira",
    "partido": "PROS",
    "estado": "CE",
    "email": "dep.vaidonoliveira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/195866.jpg"
  },
  {
    "id": 486,
    "deputado": "Valdevan Noventa",
    "partido": "PL",
    "estado": "SE",
    "email": "dep.valdevannoventa@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204385.jpg"
  },
  {
    "id": 487,
    "deputado": "Valmir Assunção",
    "partido": "PT",
    "estado": "BA",
    "email": "dep.valmirassuncao@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160610.jpg"
  },
  {
    "id": 488,
    "deputado": "Vander Loubet",
    "partido": "PT",
    "estado": "MS",
    "email": "dep.vanderloubet@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74376.jpg"
  },
  {
    "id": 489,
    "deputado": "Vanderlei Macris",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.vanderleimacris@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141553.jpg"
  },
  {
    "id": 490,
    "deputado": "Vavá Martins",
    "partido": "Republicanos",
    "estado": "PA",
    "email": "dep.vavamartins@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204505.jpg"
  },
  {
    "id": 491,
    "deputado": "Vermelho",
    "partido": "PSD",
    "estado": "PR",
    "email": "dep.vermelho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204396.jpg"
  },
  {
    "id": 492,
    "deputado": "Vicentinho",
    "partido": "PT",
    "estado": "SP",
    "email": "dep.vicentinho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74283.jpg"
  },
  {
    "id": 493,
    "deputado": "Vicentinho Júnior",
    "partido": "PL",
    "estado": "TO",
    "email": "dep.vicentinhojunior@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/137070.jpg"
  },
  {
    "id": 494,
    "deputado": "Vilson da Fetaemg",
    "partido": "PSB",
    "estado": "MG",
    "email": "dep.vilsondafetaemg@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204483.jpg"
  },
  {
    "id": 495,
    "deputado": "Vinicius Carvalho",
    "partido": "Republicanos",
    "estado": "SP",
    "email": "dep.viniciuscarvalho@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/141555.jpg"
  },
  {
    "id": 496,
    "deputado": "Vinicius Farah",
    "partido": "MDB",
    "estado": "RJ",
    "email": "dep.viniciusfarah@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204478.jpg"
  },
  {
    "id": 497,
    "deputado": "Vinicius Gurgel",
    "partido": "PL",
    "estado": "AP",
    "email": "dep.viniciusgurgel@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160591.jpg"
  },
  {
    "id": 498,
    "deputado": "Vinicius Poit",
    "partido": "NOVO",
    "estado": "SP",
    "email": "dep.viniciuspoit@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204532.jpg"
  },
  {
    "id": 499,
    "deputado": "Vitor Hugo",
    "partido": "PSL",
    "estado": "GO",
    "email": "dep.vitorhugo@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/179587.jpg"
  },
  {
    "id": 500,
    "deputado": "Vitor Lippi",
    "partido": "PSDB",
    "estado": "SP",
    "email": "dep.vitorlippi@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178992.jpg"
  },
  {
    "id": 501,
    "deputado": "Vivi Reis",
    "partido": "PSOL",
    "estado": "PA",
    "email": "dep.vivireis@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/pages/dn/gz/q7/0e/o2/40/outros-candidatos.png"
  },
  {
    "id": 502,
    "deputado": "Waldenor Pereira",
    "partido": "PT",
    "estado": "BA",
    "email": "dep.waldenorpereira@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160569.jpg"
  },
  {
    "id": 503,
    "deputado": "Walter Alves",
    "partido": "MDB",
    "estado": "RN",
    "email": "dep.walteralves@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178952.jpg"
  },
  {
    "id": 504,
    "deputado": "Weliton Prado",
    "partido": "PROS",
    "estado": "MG",
    "email": "dep.welitonprado@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160518.jpg"
  },
  {
    "id": 505,
    "deputado": "Wellington Roberto",
    "partido": "PL",
    "estado": "PB",
    "email": "dep.wellingtonroberto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74043.jpg"
  },
  {
    "id": 506,
    "deputado": "Wilson Santiago",
    "partido": "PTB",
    "estado": "PB",
    "email": "dep.wilsonsantiago@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74044.jpg"
  },
  {
    "id": 507,
    "deputado": "Wolney Queiroz",
    "partido": "PDT",
    "estado": "PE",
    "email": "dep.wolneyqueiroz@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/74439.jpg"
  },
  {
    "id": 508,
    "deputado": "Zé Carlos",
    "partido": "PT",
    "estado": "MA",
    "email": "dep.zecarlos@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/178889.jpg"
  },
  {
    "id": 509,
    "deputado": "Zé Neto",
    "partido": "PT",
    "estado": "BA",
    "email": "dep.zeneto@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204559.jpg"
  },
  {
    "id": 510,
    "deputado": "Zé Silva",
    "partido": "Solidariedade",
    "estado": "MG",
    "email": "dep.zesilva@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160632.jpg"
  },
  {
    "id": 511,
    "deputado": "Zé Vitor",
    "partido": "PL",
    "estado": "MG",
    "email": "dep.zevitor@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/204517.jpg"
  },
  {
    "id": 512,
    "deputado": "Zeca Dirceu",
    "partido": "PT",
    "estado": "PR",
    "email": "dep.zecadirceu@camara.leg.br",
    "img": "https://arte.estadao.com.br/public/placar/img/voter/160592.jpg"
  }
];

const Details = ({display,toogleModal,message}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{message}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({deputado, partido, link}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <Details display={modal} toogleModal={mudaModal} message={partido}/>

      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
        <Text style={styles.h1}>{deputado}</Text>
      </Pressable>
    </View>
    )
}

export default function App() {
  
  function renderItem({item}){

  return(
    <Pessoa deputado={item.deputado} 
            minhaFunc={() => (alert(item.email))}
            link={item.img}
            partido={"Partido \n\n" + item.partido + "-" + item.estado}
    />
  )
}
  
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 50,
  },
  h1: {
    margin: 24,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#bfdce3',
  },
  tinyLogo: {
    width: 70,
    height: 100,
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
