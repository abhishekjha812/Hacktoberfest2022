import random, requests, datetime

while(True):
    try:
        url = "https://graphql.anilist.co"
        query = '''
        {
            Page(page:%d, perPage:1){
                media (sort:POPULARITY_DESC, isAdult: false){
                    title {
                        english
                        romaji
                    }
                }
            }
        }
        '''%(random.randint(0, 200))

        # Fetch API from Anilist
        data = (requests.post(url, json={"query": query})).json()
        answer = data['data']['Page']['media'][0]['title']['romaji']
        print(datetime.datetime.now(), '-', answer)

        # Animethemes
        encode_title = answer.replace(' ', '%20')
        response = requests.get(f"https://animethemes-api.herokuapp.com/api/v1/search/{encode_title}").json()
        x = random.randint(0, len(response['anime'][0]['themes'])-1)
        selected_vid = response['anime'][0]['themes'][x]['mirrors'][0]['mirror']
        print(datetime.datetime.now(), '-', selected_vid)

        # Download the song
        response = requests.get(selected_vid)
        vid_filename = "serikat.webm"
        open(vid_filename, "wb").write(response.content)
        break
    except Exception as e:
        print(datetime.datetime.now(), '-', e)
        continue