# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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
	  },
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
	  }
	]
  )