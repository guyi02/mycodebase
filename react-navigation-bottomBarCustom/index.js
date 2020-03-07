import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
const MyTabBar = props => <BottomTabBar {...props} />;

{
    // icones e nomes de rotas aquii
},
{
    initialRouteName: 'Home',
    tabBarComponent: props => (
        <View
            style={{
                backgroundColor:
                    props.navigation.state.index === 2
                        ? colors.primary
                        : colors.white,
            }}>
            <MyTabBar
                {...props}
                style={{
                    backgroundColor: colors.white,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderTopColor: 'transparent',
                }}
            />
        </View>
    ),
    tabBarOptions: {
        showLabel: false,
    },
},