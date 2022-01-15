function App() {
    return <DogImageContainer />
}
//  enforce separation of concerns 强制分离关注点
// 使用Container/Presentational模式分离应用视图和逻辑

// presentational component：展示组件,负责如何展示数据
function DogImage({dogs}) {
    return dogs.map((dog, i) => <img src={dog} key={i} alt='Dog'/>)
}
// container component：容器组件, 负责传递什么数据
function DogImageContainer(){
    const [dogs, setDogs] = React.useState([]);
    React.useEffect(() => {
        fetch("https://dog.ceo/api/breed/labrador/images/random/6")
          .then(res => res.json())
          .then(({ message }) => setDogs(message));
    }, []);

    return <DogImage dogs={dogs}/>
}

// useHook
function useDogImages() {
    const [dogs, setDogs] = React.useState([]);
    React.useEffect(() => {
        fetch("https://dog.ceo/api/breed/labrador/images/random/6")
          .then(res => res.json())
          .then(({ message }) => setDogs(message));
    }, []);
    
    return dogs
}
function DogImages() {
    const dogs = useDogImages();
    return dogs.map((dog, i) => <img src={dog} key={i} alt='Dog'/>)
}