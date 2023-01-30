import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
	return (
		<View className='flex-1 items-center justify-center bg-slate-400 text-indigo-400'>
			<Text>Hell Oworld</Text>
			<StatusBar style='auto' />
		</View>
	);
}
