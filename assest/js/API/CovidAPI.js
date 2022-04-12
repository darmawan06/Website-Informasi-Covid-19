const CovidAPI = async (dataString)=>{
	const url = 'https://covid19.mathdro.id/api'
	const getData = ()=>{
		return $.get(`${url}/${dataString}`,(data)=>{
			return data;
		})
	}

	return await getData();

}

module.exports = {
	CovidAPI : CovidAPI,
}
