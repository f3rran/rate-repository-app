import {View} from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import LogInPage from '../pages/LogIn'

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <AppBar/>
            <Routes>
                <Route exact path='/' element={<RepositoryList />} />
                <Route exact path='/signin' element={<LogInPage />} />
            </Routes>
        </View>
    )
}

export default Main