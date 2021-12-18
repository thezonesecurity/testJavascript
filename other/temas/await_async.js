const loadData = async () => {
    //QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD&q=cheeseburgers";
    const result = await fetch(url);
    const { data } = await result.json();
    console.log(data);
  };
  loadData();