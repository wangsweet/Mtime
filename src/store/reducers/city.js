import { handleActions } from "redux-actions"
import { cityList,cityChange } from "actions/city/cityListType"
const defaultState = {
    cityName: "北京",
    cityId: 1,
    cityList: []
}

export default handleActions({
    [cityList]: (state, action) => {
        let cityState = JSON.parse(JSON.stringify(state))
        let cities = action.payload.data.cities;
        
        //城市列表
        for (var i = 0; i < cities.length; i++) {
            let letterFirst = cities[i].py.slice(0, 1).toUpperCase();
            if (isCityList(letterFirst)) {
                //不存在
                cityState.cityList.push({ index: letterFirst, list: [{ id: cities[i].id, nm: cities[i].nm }] })
            } else {
                //存在

                for (var j = 0; j < cityState.cityList.length; j++) {
                    if (cityState.cityList[j].index === letterFirst) {
                        cityState.cityList[j].list.push({ id: cities[i].id, nm: cities[i].nm })
                    }
                }
            }

        }

        //判断城市标识是否在cityList中存在
        function isCityList(letterFirst) {
            var bStop = true;
            for (var i = 0; i < cityState.cityList.length; i++) {
                if (cityState.cityList[i].index === letterFirst) {
                    bStop = false;
                    break;
                }
            }

            return bStop;
        }
        cityState.cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })
        return cityState;
    },
    [cityChange]:(state,action)=>{
        let cityChangeState=JSON.parse(JSON.stringify(state));
        cityChangeState.cityName=action.payload.nm
        cityChangeState.cityId=action.payload.id
        return cityChangeState;
    }
}, defaultState)

