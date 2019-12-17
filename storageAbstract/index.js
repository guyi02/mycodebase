import AsyncStorage from "@react-native-community/async-storage";

const storage = {
    get: async name => {
        try {
            let value = await AsyncStorage.getItem(name);
            if (value !== null) {
                try {
                    value = JSON.parse(value);
                    return value;
                } catch (error) {
                    return value;
                }
            }

            return null;
        } catch (error) {
            console.error("Error while retrieving data", error);
        }

        return null;
    },
    set: async (name, data) => {
        try {
            let value;
            try {
                value = JSON.stringify(data);
            } catch (error) {
                value = data;
            }
            return await AsyncStorage.setItem(name, value);
        } catch (error) {
            console.error("Error while storing data:", error);
        }

        return null;
    },
    getUser: () => {
        return storage.get("@user:data");
    },
    setUser: user => {
        return storage.set("@user:data", user);
    },
    getEscola: () => {
        return storage.get("@user:school");
    },
    setEscola: id => {
        return storage.set("@user:school", id);
    },
};
export default storage;
