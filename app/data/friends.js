var friendsArray = [
    {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
    },
    {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
    },
    {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [ "3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
    },
    {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
    },
    {
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
    },
    {
    "name": "alex",
    "photo": "https://media1.tenor.com/images/48eca3f0153b3d518e15ee4752ae47f6/tenor.gif?itemid=4966206",
    "scores": ["4", "5", "4", "2", "3", "1", "5", "2", "3", "3"]
    },
    {
    "name": "maya",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj_sYue5qriAhVCU98KHXa3DiEQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Fimage-statue-brass-child-art-1465348%2F&psig=AOvVaw3YOWP7aHpTVXP4JC82ZSbr&ust=1558465409673759",
    "scores": ["3", "5", "5", "3", "4", "1", "3", "3", "2", "4"]
    },
    {
    "name": "Jimmy",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjYlO758KriAhWLxVQKHaSxD1YQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fturtle%2F&psig=AOvVaw2T1s0rUb0yKpP5dE8MSqZb&ust=1558468293416560",
    "scores": ["2", "1", "4", "2", "3", "4", "1", "1", "4", "3"]
    },
    {
    "name": "gladys",
    "photo": "ssss",
    "scores": ["5", "3", "4", "2", "4", "4", "5", "5", "4", "4"]
    },
    {
    "name": "Steve Rogers",
    "photo": "data:image/jpeg;base64,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",
    "scores": ["3", "2", "3", "3", "3", "2", "4", "2", "2", "2"]
    },
    {
    "name": "Steven K Mason",
    "photo": "https://www.pexels.com/photo/nature-red-love-romantic-67636/",
    "scores": ["4", "2", "4", "1", "2", "3", "5", "1", "4", "4"]
    },
    {
    "name": "Daniela",
    "photo": "https://www.google.com/search?q=panda+pictures&tbm=isch&source=iu&ictx=1&fir=mxP07CFfWq0VDM%253A%252C_fYAEsgS_ErIvM%252C_&vet=1&usg=AI4_-kTNAN89GKROpK6eqv8cG05tjpE5lQ&sa=X&ved=2ahUKEwiowfbghKviAhVF2FkKHew4CuUQ9QEwAXoECAcQBg#imgrc=mxP07CFfWq0VDM:",
    "scores": ["5", "3", "3", "1", "1", "2", "4", "1", "2", "4"]
    },
    {
    "name": "Ebrima Saho",
    "photo": "https://www.facebook.com/photo.php?fbid=1241825039303243&set=a.141315212687570&type=3&theater",
    "scores": ["3", "4", "4", "4", "3", "4", "2", "2", "3", "2"]
    },
    
    {
    "name": "julio",
    "photo": "https://drive.google.com/open?id=0BzRTAJJR_epAMVBZUTJtc182Nnc",
    "scores": ["3", "3", "3", "4", "3","4", "3", "4", "5", "2"]
    },
    {
    "name": "Rafael",
    "photo": "https://images-na.ssl-images-amazon.com/images/I/51n91sx4oHL._SX425_.jpg",
    "scores": ["5", "5", "2", "1", "3", "4", "5", "3", "5"]
    }
    ];

    module.exports = friendsArray;