def get_length(count_dict):
	count = 0

	for key in count_dict:
		count += 1

	return count


inp_dict = {
	"band": "Travis Shredd & the Good 'ol Homeboys",
	"style": "Country/Metal/Rap",
	"album": "The Neighbor of the Beast"
}

my_list = [1,2,3,4,5]

print get_length(inp_dict)

print inp_dict["style"]
