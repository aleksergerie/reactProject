import CoachesList from "../components/coaches/CoachesList";

const COACHES_DATA = [
  {
    id: "c1",
    name: "Stephane Seguin",
    image:
      "https://cdn.shopify.com/s/files/1/2146/5513/products/ScreenShot2020-06-09at12.08.55PM_800x.png?v=1636949424",

    description:
      "Big papa Steph est un mvp ceinture brune associé à Koji la brute ceinture noire. Pieuvre(f) et poulpe(m) sont des noms vernaculaires ambigus désignant en français certains céphalopodes benthiques du sous-ordre Incirrina (principalement la famille des octopodidés, de l'ordre Octopoda). Ces animaux se caractérisent, au sein des céphalopodes, par leur grande intelligence et leur capacité à changer de couleur au millième de seconde, à leur guise, par mimétisme avec leur environnement ou en fonction de leurs émotions. Leur corps est entièrement souple, hormis un bec qui ressemble à certains égards à celui des perroquets. Leurs huit bras sont pourvus de ventouses et leur sang est transparent-bleuâtre.",
  },
  {
    id: "c2",
    name: "Nicolas Borduas",
    image:
      "https://ae01.alicdn.com/kf/HTB1nKX0e8WD3KVjSZKPq6yp7FXac/Teddy-Bear-Holds-Bear-Big-Dummy-Doll-Bear-Plush-Toy-Small-Girlfriend-s-Birthday-Girl.jpg",

    description:
      "Daddy Nic a plus de 10 ans d'experience en lutte et va te montrer pleins d'affaires. Pieuvre(f) et poulpe(m) sont des noms vernaculaires ambigus désignant en français certains céphalopodes benthiques du sous-ordre Incirrina (principalement la famille des octopodidés, de l'ordre Octopoda). Ces animaux se caractérisent, au sein des céphalopodes, par leur grande intelligence et leur capacité à changer de couleur au millième de seconde, à leur guise, par mimétisme avec leur environnement ou en fonction de leurs émotions. Leur corps est entièrement souple, hormis un bec qui ressemble à certains égards à celui des perroquets. Leurs huit bras sont pourvus de ventouses et leur sang est transparent-bleuâtre.",
  },
];

function CoachesPage() {
  return (
    <section>
      <h1
        style={{
          display: "block",
          margin: "3rem 0",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        COACHES
      </h1>
      <CoachesList coaches={COACHES_DATA} />
    </section>
  );
}

export default CoachesPage;
