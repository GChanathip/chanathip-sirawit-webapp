const ProcessSugarcane = () => {
    const [factory, setFactoryName] = useState([]);
    const [caneBurning, setCaneBurning] = useState();
  
    const sugarcaneBurningArea = (region) => {
      fetch(
        "https://asia-east2-webapp-project-78b5f.cloudfunctions.net/sugarindustryapi/sugarcaneIndustry/${region}"
      )
        .then((response) => response.json())
        .then((data) => {
          let factorys = Object.values(data[0]).map((item) => {
            let data = {
              name: item.name,
              value: item.amount,
            };
            return data;
          });
          setFactoryName(factorys);
        })
        .catch((err) => console.log(err));
    };
  
    const hendleSelected = (e) => {
      let selected = e.target.value;
      sugarcaneBurningArea(selected);
    };
  
    const hendleSelected2 = (e) => {
      let selected = e.target.value;
      setCaneBurning(selected);
    };
}