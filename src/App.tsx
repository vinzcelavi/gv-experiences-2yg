import Header from './components/Header';
import MainLayout from './components/MainLayout';
import Topographic from './components/Topographic';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Topographic />
      <Header />
      <MainLayout />
    </div>
  );
}

export default App;