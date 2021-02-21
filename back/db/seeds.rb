# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: "test Tarou", email: "example@sample.com", password: "password", password_confirmation: "password", is_developer: false)

Category.create!(
	[
	  {
		name: '暮らし'
	  },
	  {
		name: '生き物'
	  },
	  {
		name: '教育'
	  },
	  {
		name: '音楽'
	  },
	  {
		name: 'ゲーム'
	  },
	  {
		name: '食べ物'
	  }
	]
  )

  IdeaDetail.create!(
	[
	  {
		purpose:'アイディアを形に',
		target:'アイディア発案者',
		name:'nendo',
		belong_to:'マッチングサービス',
		possible:'アイディア発案者とエンジニアのマッチング',
		competitor:'bosyu',
		function:'公開されていない面白いアイディアに出会える環境'
	  },
	  {
		purpose:'アイディアを形に',
		target:'アイディア発案者',
		name:'nendo',
		belong_to:'マッチングサービス',
		possible:'アイディア発案者とエンジニアのマッチング',
		competitor:'bosyu',
		function:'公開されていない面白いアイディアに出会える環境'
	  },
	  {
		purpose:'アイディアを形に',
		target:'アイディア発案者',
		name:'nendo',
		belong_to:'マッチングサービス',
		possible:'アイディア発案者とエンジニアのマッチング',
		competitor:'bosyu',
		function:'公開されていない面白いアイディアに出会える環境'
	  },
	  {
		purpose:'アイディアを形に',
		target:'アイディア発案者',
		name:'nendo',
		belong_to:'マッチングサービス',
		possible:'アイディア発案者とエンジニアのマッチング',
		competitor:'bosyu',
		function:'公開されていない面白いアイディアに出会える環境'
	  },
	  {
		purpose:'アイディアを形に',
		target:'アイディア発案者',
		name:'nendo',
		belong_to:'マッチングサービス',
		possible:'アイディア発案者とエンジニアのマッチング',
		competitor:'bosyu',
		function:'公開されていない面白いアイディアに出会える環境'
	  }
	]
  )

  Idea.create!(
	[
	  {
		title:'アイディアを形できるマッチングアプリを作りませんか？',
		user_id:1,
		idea_detail_id:1,
		category_id:3
	  },
	  {
		title:'お金が降ってくるあぷり作りませんか？',
		user_id:1,
		idea_detail_id:1,
		category_id:2
	  },
	  {
		title:'なにか作りませんか？',
		user_id:1,
		idea_detail_id:1,
		category_id:3
	  },
	  {
		title:'挨拶できるあぷりつくりたい',
		user_id:1,
		idea_detail_id:1,
		category_id:1
	  },
	  {
		title:'寝る時間を投資しよう',
		user_id:1,
		idea_detail_id:1,
		category_id:3
	  }
	]
  )
Tag.create!(
	[
		{
			idea_id:1,
			name:'アイディア'
		},
		{
			idea_id:1,
			name:'開発'
		},
		{
			idea_id:2,
			name:'開発しない'
		},
		{
			idea_id:3,
			name:'お金'
		}
	]
)