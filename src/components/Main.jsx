import {Text, View} from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Redirect, Route, Routes } from 'react-router-native'

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <AppBar/>
            <Routes>
                <Route exact path='/' element={<RepositoryList />} />
                <Route exact path='/signin' element={<Text>Working on it</Text>} />
            </Routes>
        </View>
    )
}

export default Main