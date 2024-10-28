import { getAuth } from 'firebase/auth';
import React from 'react';
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import { app } from '../../../firebaseConfig';

import styles from "./style";

const HomeScreen = ({ navigation }) => {

  const logout = () => {
    const auth = getAuth(app);
    auth.signOut().then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
      console.log("Erro ao deslogar:", error);
    });
  };

  const handleSaveItinerary = (newItineraryData) => {
    setItineraries([...itineraries, { id: Date.now(), data: newItineraryData }]);
  };

  const recommendedPlaces = [
    {
      name: 'MASP',
      image: require('../../../assets/masp.jpg'),
      description: `
        O MASP (Museu de Arte de São Paulo) é um museu icônico localizado na Avenida Paulista, projetado pela arquiteta Lina Bo Bardi. Conhecido pelo seu famoso vão livre de mais de 70 metros, o espaço abaixo do museu funciona como uma praça pública e oferece uma vista incrível da cidade.
  
        Localização:
        O MASP está localizado na Avenida Paulista, um dos principais pontos turísticos de São Paulo. O edifício do museu é famoso pelo seu vão livre de mais de 70 metros, proporcionando uma vista deslumbrante.
  
        Acervo:
        O MASP possui a mais importante coleção de arte ocidental da América Latina e do hemisfério sul, com cerca de 10 mil peças, abrangendo arte africana, americana, asiática, brasileira e europeia. A coleção inclui pinturas, esculturas, fotografias e outras formas de arte, desde a Antiguidade até o século 21.
  
        Exposições:
        O museu apresenta uma mostra de longa duração, chamada Acervo em Transformação, que é complementada por exposições temporárias, muitas vezes focadas em temas históricos e culturais, como a série Histórias.
  
        Cavaletes de Cristal:
        Uma das características marcantes da experiência no MASP são os cavaletes de cristal desenhados por Lina Bo Bardi. Eles suspendem as obras de arte em suportes transparentes, permitindo que os visitantes possam observar as peças de diferentes ângulos, aproximando o público das obras.
  
        Importância Cultural:
        O MASP é um dos museus mais importantes e visitados do Brasil, sendo frequentemente listado entre os melhores do mundo. Ele foi pioneiro em acolher tendências artísticas modernas e contemporâneas.
  
        Expansão:
        O MASP está em fase de expansão com a construção de um novo edifício chamado Pietro Maria Bardi, que será conectado ao prédio principal por uma passagem subterrânea. A inauguração está prevista para 2024, e o novo espaço contará com galerias, salas de aula, restaurante e outras facilidades para os visitantes.
      `,
    },
    {
      name: 'Teatro Municipal de São Paulo',
      image: require('../../../assets/Teatro-Municipal-sp.jpg'),
      description: `
      O Teatro Municipal de São Paulo é um dos mais importantes e icônicos teatros do Brasil, conhecido por sua arquitetura esplêndida e sua rica programação cultural. Localizado no centro de São Paulo, o teatro é um marco histórico e cultural da cidade.

      Localização:
      O Teatro Municipal está situado na Praça Ramos de Azevedo, no centro de São Paulo. A sua localização central torna-o acessível a partir de várias partes da cidade e é próximo de outros pontos turísticos e centros culturais.

      Arquitetura:
      O teatro é um exemplo notável da arquitetura neoclássica e foi inspirado em grandes teatros europeus. Projetado pelo arquiteto Ramos de Azevedo, o edifício é conhecido por sua fachada imponente, seus grandiosos salões e seu luxuoso interior. O Teatro Municipal foi inaugurado em 1911 e passou por várias reformas ao longo dos anos para preservar sua beleza e funcionalidade.

      Programação:
      O Teatro Municipal de São Paulo oferece uma vasta programação cultural que inclui óperas, ballets, concertos e peças teatrais. É conhecido por receber apresentações de alta qualidade e por seu papel na promoção das artes cênicas na cidade.

      Importância Cultural:
      O Teatro Municipal é um importante centro cultural e artístico de São Paulo, frequentemente listado entre os melhores teatros do país. Sua importância vai além das performances que oferece, servindo como um símbolo do patrimônio cultural e histórico da cidade.

      Visitação:
      O teatro está aberto ao público para visitas guiadas e apresentações. As visitas permitem que os visitantes explorem os belos interiores e aprendam sobre a história e a arquitetura do local. Recomenda-se verificar a programação e reservar ingressos com antecedência para assistir a uma das muitas apresentações oferecidas.

      Renovação:
      O Teatro Municipal passou por várias renovações e restaurações ao longo dos anos para garantir que continue a ser um dos principais centros culturais de São Paulo. Essas reformas visam preservar a integridade histórica do edifício enquanto modernizam suas instalações para o conforto dos visitantes.
    `,
    },
    {
      name: 'Parque Ibirapuera',
      image: require('../../../assets/parque-ibirapuera.jpg'),
      description: `
    O Parque Ibirapuera é um dos mais importantes e icônicos parques urbanos do Brasil, conhecido por sua vasta área verde, suas atrações culturais e sua importância para o lazer e bem-estar da população. Localizado em São Paulo, o parque é um marco histórico e cultural da cidade.

    Localização:
    O Parque Ibirapuera está situado na Zona Sul de São Paulo, entre os bairros Ibirapuera e Vila Mariana. A sua localização central facilita o acesso a partir de diferentes áreas da cidade e é próximo de importantes centros culturais e instituições educacionais.

    Arquitetura e Design:
    O parque foi projetado por Oscar Niemeyer e Burle Marx, sendo um exemplo notável de paisagismo e arquitetura moderna. O espaço inclui belos lagos, amplas áreas de lazer, jardins e diversas estruturas arquitetônicas, como o Auditório Ibirapuera e o Pavilhão da Bienal. O projeto do parque é um exemplo do conceito de "cidade jardim", integrando natureza e urbanismo.

    Atrações:
    O Parque Ibirapuera oferece uma variedade de atrações e atividades, incluindo áreas para caminhadas, ciclismo, esportes, piqueniques e eventos culturais. O parque abriga importantes instituições culturais como o Museu de Arte Moderna (MAM) e o Museu Afro Brasil, além de um planetário e diversos centros de cultura e lazer.

    Importância Cultural:
    O Parque Ibirapuera é um importante centro de lazer e cultura em São Paulo, frequentemente listado entre os melhores parques urbanos do país. Sua importância vai além das atividades recreativas, servindo como um símbolo do patrimônio cultural e ambiental da cidade.

    Visitação:
    O parque está aberto ao público todos os dias e é um destino popular para atividades ao ar livre e eventos culturais. A entrada é gratuita e não é necessário fazer reservas para visitar o parque, embora algumas atrações internas possam exigir ingressos.

    Renovação:
    O Parque Ibirapuera passa por contínuas melhorias e renovações para manter suas instalações e garantir uma experiência agradável para os visitantes. Essas atualizações visam preservar a beleza natural do parque enquanto modernizam suas estruturas e serviços.
  `,
    },
    {
      name: 'Parque Villa-Lobos',
      image: require('../../../assets/parque-villa-lobos.jpg'),
      description: `
    O Parque Villa-Lobos é um dos principais parques urbanos de São Paulo, conhecido por sua ampla área verde, instalações para atividades recreativas e sua importância para o lazer e a qualidade de vida na cidade. Localizado na Zona Oeste de São Paulo, o parque é um espaço essencial para os residentes e visitantes.

    Localização:
    O Parque Villa-Lobos está situado no bairro de Alto de Pinheiros, na Zona Oeste de São Paulo. Sua localização central oferece fácil acesso para moradores de diferentes áreas da cidade e está próximo de importantes vias de transporte.

    Arquitetura e Design:
    O parque foi projetado para proporcionar uma ampla variedade de espaços ao ar livre e áreas de lazer. Inclui grandes gramados, trilhas para caminhadas e corridas, ciclovias, e um complexo de esportes que oferece quadras para tênis, futebol e outras atividades. O design do parque visa oferecer um ambiente agradável e multifuncional para diferentes tipos de usuários.

    Atrações:
    O Parque Villa-Lobos é conhecido por suas instalações para atividades físicas e recreativas, incluindo pistas para ciclismo, áreas para piqueniques, playgrounds para crianças e espaços para eventos ao ar livre. Além disso, o parque frequentemente organiza eventos culturais e esportivos, atraindo um público diversificado.

    Importância Cultural:
    O Parque Villa-Lobos é um importante espaço verde em São Paulo, contribuindo significativamente para a qualidade de vida urbana. Sua ampla gama de facilidades e sua importância para atividades ao ar livre fazem dele um dos principais pontos de lazer na cidade.

    Visitação:
    O parque está aberto ao público todos os dias e oferece acesso gratuito. É um destino popular para atividades físicas, encontros sociais e eventos comunitários. Não é necessário fazer reservas para visitar o parque, mas algumas atividades e eventos podem exigir inscrições antecipadas.

    Renovação:
    O Parque Villa-Lobos passa por melhorias e manutenções regulares para manter suas instalações em boas condições e garantir a satisfação dos visitantes. Essas atualizações ajudam a preservar o espaço e a oferecer uma experiência de alta qualidade para todos que o utilizam.
  `,
    }

  ];

  const couponPlaces = [
    {
      name: 'Mocotó - 5% OFF',
      image: require('../../../assets/mocoto.png'),
      description: `
        O Mocotó é um renomado bar e restaurante de São Paulo, especializado em comida nordestina. Oferece um ambiente acolhedor e pratos autênticos.
    
        Como Funciona o Cupom:
        - Ganhe cupons participando de promoções ou ao visitar o restaurante. Os cupons podem ser de desconto percentual, valor fixo ou prato grátis.
        - Para usar, informe o garçom ou mostre o cupom digital ao fazer o pedido. O desconto é aplicado ao total da conta ou item específico.
    
        Condições:
        - Não cumulativo com outras promoções.
        - Sujeito a restrições.
      `,
    },
    {
      name: 'Tordesilhas - 8% OFF',
      image: require('../../../assets/tordesilhas.jpg'),
      description: `
        O Tordesilhas é um sofisticado restaurante em São Paulo, conhecido por sua cozinha brasileira contemporânea e ambiente elegante.
    
        Como Funciona o Cupom:
        - Obtenha cupons ao participar de promoções ou eventos especiais do restaurante. Os cupons podem oferecer desconto percentual, valor fixo ou pratos gratuitos.
        - Para usar, apresente o cupom ao garçom ou mostre o cupom digital na hora do pagamento. O desconto é aplicado no total da conta ou em itens selecionados.
    
        Condições:
        - Não acumulável com outras ofertas.
        - Pode ter restrições específicas.
      `,
    },

    {
      name: 'Clube JazzB - 3% OFF',
      image: require('../../../assets/jazzb.jpg'),
      description: `
        O Clube JazzB é um renomado clube de jazz em São Paulo, conhecido por seu ambiente intimista e performances ao vivo de alta qualidade.
    
        Como Funciona o Cupom:
        - Cupons podem ser adquiridos através de promoções ou eventos especiais. Eles oferecem descontos em ingressos, bebidas ou consumação mínima.
        - Para utilizar, apresente o cupom ao entrar no clube ou no momento da compra no bar. O desconto será aplicado conforme os termos do cupom.
    
        Condições:
        - Não válido para eventos especiais ou datas específicas.
        - Não pode ser combinado com outras promoções.
      `,
    },

    {
      name: 'Zoológico de São Paulo - 6% OFF',
      image: require('../../../assets/zoologico-sp.jpg'),
      description: `
        O Zoológico de São Paulo é um dos maiores e mais completos zoológicos do Brasil, oferecendo uma vasta coleção de animais de diferentes espécies em um ambiente naturalizado.
    
        Como Funciona o Cupom:
        - Cupons podem ser usados para obter descontos na entrada do zoológico, em passeios guiados ou em experiências especiais como encontros com animais.
        - Para utilizar, apresente o cupom na bilheteira do zoológico ou no local específico da atividade. O desconto será aplicado conforme os termos do cupom.
    
        Condições:
        - O cupom não é válido para itens de alimentação ou loja de presentes.
        - Pode ter restrições em datas específicas.
      `,
    }


  ];



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>TechPeach</Text>

        {/* Botão de Logout substituindo o ícone */}
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            { backgroundColor: pressed ? '#646464FF' : '#242424FF' }
          ]}
          onPress={logout}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>

      <View style={styles.containerButtons}>
        <ImageBackground
          source={require('../../../assets/banner.jpg')}
          style={styles.divText}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.overlay}>
            <Text style={styles.textOverlay}>
              Explore São Paulo de uma forma totalmente personalizada com os itinerários exclusivos. Deixe-nos guiar você em uma experiência única pela vibrante São Paulo.
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.buttonRow}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#D49203FF' : '#eca406' }
            ]}
            onPress={() => navigation.navigate('MeusItinerarios', { handleSaveItinerary })}
          >
            <Text style={styles.text}>MEUS ITINERÁRIOS</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#D49203FF' : '#eca406' }
            ]}
            onPress={() => navigation.navigate('Formulario')}
          >
            <Text style={styles.text}>CRIAR ITINERÁRIOS</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Lugares Com Cupons</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {couponPlaces.map((place, index) => (
            <Pressable
              key={index}
              style={styles.recommendedItem}
              onPress={() => navigation.navigate('Detalhes', { place })} // Passando o lugar como parâmetro
            >
              <Image source={place.image} style={styles.recommendedImage} />
              <Text style={styles.recommendedText}>{place.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Lugares Recomendados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedPlaces.map((place, index) => (
            <Pressable
              key={index}
              style={styles.recommendedItem}
              onPress={() => navigation.navigate('Detalhes', { place })} // Passando o lugar como parâmetro
            >
              <Image source={place.image} style={styles.recommendedImage} />
              <Text style={styles.recommendedText}>{place.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &#169; TechPeach Copyright 2024
        </Text>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
