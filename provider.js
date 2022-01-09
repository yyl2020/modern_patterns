
//  const Header = ({data}) => <div>{data.title}</div>;
//  const Text = ({data}) => <h1>{data.text}</h1>;
//  const Block = ({data}) => <Text data={data}/>;
//  const Content = ({data}) => (
//     <div>
//         <Header data={data}/>
//         <Block data={data}/>
//     </div>
//  )
//  const ListItem = ({data}) => <span>{data.listItem}</span>
//  const List = ({data}) => <ListItem data={data}/>;
//  const SideBar = ({data}) => <List data={data}/>;
//  function App() {
//      const data = {
//          title: 'Hello World',
//          text: 'This is a text',
//          listItem: 'This is a list item',
//      }
//     return (
//         <div>
//             <SideBar data={data}/>
//             <Content data={data}/>
//         </div>
//     )
//  }
// 使用Provider高阶组件,我们可以使数据可供多个组件使用.
// Provider由Context对象提供
const DataContext = React.createContext();
function App() {
    const data = {
        title: 'Hello World',
        text: 'This is a text',
        listItem: 'This is a list item',
    }
    return (
        <DataContext.Provider value={data}>
            <SideBar/>
            <Content/>
        </DataContext.Provider>
    )
}
const SideBar = () => <List/>
const List = () => <ListItem/>
const ListItem = () => {
    const data = React.useContext(DataContext);
    return <span>{data.listItem}</span>
}
const Content = () => (
    <div>
        <Header/>
        <Block/>
    </div>
)
const Header = () => {
    const data = React.useContext(DataContext);
    return <div>{data.title}</div>
}
const Block = () => <Text/>
const Text = () => {
    const data = React.useContext(DataContext);
    return <h1>{data.text}</h1>
}