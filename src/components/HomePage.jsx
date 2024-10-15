import React from 'react'
import logo from "../assets/Logo.png"
import profile from "../assets/profilePhoto.png"
import filter from "../assets/filter.png"
import Categories from './Categories'

function HomePage() {


  return (
    <>
    <div className='flex flex-col  h-screen w-screen'>
      <div className='flex justify-between bg-white pr-[70px] pl-[20px] py-5 border border-b-gray-200 fixed top-0 left-0 right-0 '>
      <img src={logo} className=' w-[300px] h-[30px] object-cover' ></img>
      <img src={profile} className='w-8 h-8'></img>
      </div>
      <div className='flex '>
       <div className=' flex flex-col w-[300px] border border-r-gray-200 border-t-white fixed top-[70px] left-0'>
          {/*Filters div*/}
          <div className='w-full border border-b-gray-200 border-t-white border-r-white h-[60px]'>
            <div className='flex gap-5  px-4 pt-5'>
              <img src={filter} className='w-6 h-6'></img>
              <p> Filters</p>
            </div>
          </div>
          <Categories categoryName="companies"/>
          <Categories categoryName="roles"/>
          <Categories categoryName="years Of Experience"/>
          
          <button className='h-10 rounded-xl border mx-3 my-9 text-white bg-[#4152f0]'>
            Add your experience
          </button>        
       </div>
       <div className=' ml-[300px]  overflow-y-auto p-[100px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas saepe laboriosam alias similique repudiandae temporibus repellat expedita eum sequi magnam, consequatur maxime inventore quidem tenetur itaque modi ex incidunt!
        Delectus perspiciatis officia aut molestiae cupiditate totam itaque tempore adipisci soluta repellendus, ex earum ullam consequuntur. Libero harum itaque similique. Voluptatem, officia autem iusto praesentium consequuntur natus odit esse explicabo!
        Exercitationem impedit ut labore fugit culpa veritatis neque modi debitis quae nobis excepturi, inventore aliquam facere tempore nostrum esse tempora sint corporis saepe fuga molestiae officia, et optio distinctio. Earum.
        Rem hic beatae asperiores qui officiis numquam a est perspiciatis. Iste illo odio facere quod quaerat cum minus amet iusto explicabo, a ipsam sapiente possimus, quam velit nesciunt, alias numquam.
        Natus, consectetur at. Illo, atque. Eaque aut, ullam iure voluptate reiciendis molestiae recusandae fuga qui corporis omnis excepturi consequatur aperiam odio sed eligendi asperiores impedit voluptatum laborum nostrum vero officiis!
        Quisquam sed molestias totam, provident in eius odio molestiae illo fugiat fuga illum aliquid, eos impedit dolor veniam similique possimus. Quae veritatis voluptatem facere neque error reiciendis sequi est quidem.
        Nam, officiis iste sint quibusdam maiores rem molestiae assumenda aliquid hic doloremque, distinctio aliquam! Nesciunt asperiores, iusto odit totam velit eligendi, veritatis consectetur voluptate quas quasi reprehenderit aut ipsum sapiente.
        Possimus voluptatibus explicabo dolorum sint nihil reiciendis quia non ratione earum recusandae pariatur est aliquid exercitationem ullam autem libero, eum maiores. Necessitatibus eveniet, delectus nemo tempore magni eos odio. Numquam.
        Id vel cupiditate error est animi recusandae consectetur qui voluptas quasi nemo maxime aut quisquam, illum labore quo? Excepturi at fuga sint dolorum sapiente, officiis soluta dicta accusamus fugiat a.
        Consectetur voluptatibus, aut veritatis earum hic, molestiae itaque explicabo maxime ullam aliquam exercitationem eaque ad porro labore voluptatum omnis dolores eligendi, possimus repellat qui delectus. Expedita cum accusamus sit eum.
        Exercitationem nisi adipisci aliquam, mollitia quod recusandae quam a ea pariatur quas ullam, suscipit consectetur accusantium perferendis maxime dolor facilis magni necessitatibus voluptate ipsam? Unde, officiis dolorum. Itaque, nam maxime?
        Ipsum, debitis, officia omnis ad architecto corrupti corporis, obcaecati asperiores repellat nulla sint repellendus quisquam. Iusto hic soluta eius similique ea ducimus error. Odit natus expedita tempore autem fugiat numquam.
        Illo minima corrupti in laborum tenetur. Quidem officia quod beatae nam eum. Accusamus, explicabo in suscipit voluptates alias cum, corrupti, voluptas veniam enim eius est perferendis. Eaque totam recusandae atque!
        Reiciendis ullam repudiandae tenetur, autem vitae itaque dolore molestiae similique? Deleniti modi repellendus dignissimos omnis, itaque qui odio illum, quo nobis minima incidunt rerum maiores reprehenderit, nihil beatae libero soluta.
        Provident optio et magnam quos ex assumenda illo dolor id itaque molestiae, maxime earum excepturi, quidem explicabo ullam, possimus numquam maiores neque aperiam omnis corporis porro consequatur? Sed, iste sunt!
        Delectus facilis quibusdam natus odit, temporibus quis sapiente quidem provident a odio blanditiis ullam! Neque reiciendis necessitatibus temporibus omnis sit perspiciatis dolor laboriosam soluta maxime quae, nihil architecto voluptate voluptatem!
        Obcaecati magni quis neque maxime necessitatibus iusto sit voluptatem aspernatur commodi, debitis eligendi repellendus molestias sint id possimus. Neque non pariatur ullam laborum hic incidunt recusandae quasi cumque, magnam sint.
        Quae sed aut consequatur esse reiciendis! Laboriosam amet quaerat voluptates mollitia omnis quisquam totam, incidunt odio reprehenderit nam illum eaque architecto consequatur quidem quasi dolore consequuntur, magni commodi tenetur fugit.
        Architecto, repellat voluptatum commodi facilis odit aut? Esse, veritatis. Eius, unde? Odio aliquid labore placeat qui eos est, incidunt quae, quia culpa suscipit dolores quisquam. Ducimus cum ut temporibus voluptas.
        Laudantium non suscipit sunt eum, reiciendis, aliquid quidem modi nostrum reprehenderit accusamus, est facere fugit! Accusantium obcaecati commodi numquam necessitatibus eius assumenda amet. Quas itaque est laudantium ducimus, consequuntur fuga.
        Deserunt, earum pariatur officiis officia saepe itaque quos. Numquam, expedita assumenda? Minus, quaerat reiciendis architecto, eius, voluptas libero aut odio quibusdam assumenda at dolor molestiae quam ipsa maiores quisquam officiis!
        Assumenda delectus sapiente eaque adipisci quia. Doloremque rerum, consectetur animi deleniti consequuntur quam odit est cupiditate vel doloribus. Illo cum qui exercitationem magnam quod asperiores sint reiciendis deserunt consequatur voluptate.
        Illo et, temporibus saepe neque cumque esse. Blanditiis, harum ab commodi, at quaerat fugit aut eum excepturi quo voluptatibus nostrum libero dignissimos accusantium ut ipsam cupiditate ea porro sapiente aliquid.
        Reprehenderit quae impedit fugiat. Magnam quisquam tempore nihil saepe odio ipsum iusto dolore optio accusamus! Quod tenetur fugiat numquam ad quae sunt eum aut asperiores, dicta voluptatem quasi atque nobis.
        Exercitationem aliquid quae voluptate architecto molestias, fugiat consectetur nulla, corporis, sed odio nesciunt saepe perferendis? Repellat, assumenda aut? Expedita dolores saepe libero temporibus quae rerum voluptatum exercitationem ad et dolore!
        Assumenda minus nobis commodi expedita, ipsum itaque! Laborum et quod saepe, dignissimos blanditiis nulla voluptas dolores necessitatibus consequatur sequi quos id accusantium, quas ipsam esse veniam quae velit reprehenderit voluptatibus!
        Officiis assumenda vel minima ab dolor optio iusto facere repellat perspiciatis, dolores debitis perferendis explicabo nostrum molestiae repudiandae vero veritatis eaque provident corporis aliquam laudantium. Non similique sunt eveniet sit.
        Ducimus, dolores. Modi nesciunt aspernatur at facilis natus veniam provident cumque sequi amet cum reprehenderit doloremque repellendus sit molestiae laudantium eos maxime minus eveniet id, voluptatum optio quod. Fugit, dolor.
        Odit asperiores unde perspiciatis cumque inventore atque vitae aspernatur! Neque blanditiis minima perspiciatis voluptates. Libero blanditiis natus provident odit assumenda sit quod consectetur nisi vel ratione sequi, soluta fugiat reprehenderit?
        Sint voluptas, sit explicabo, recusandae odio facere, consectetur quas debitis qui voluptatibus doloremque tempore illo placeat suscipit voluptatum dolor dignissimos ratione nam quibusdam a laborum cumque pariatur! Mollitia, necessitatibus magni.
        Voluptate modi, reiciendis sapiente, quo aspernatur, iste beatae laudantium excepturi placeat minus in libero aut mollitia quas architecto ex maxime impedit itaque quis magni consectetur unde odio consequatur. Dicta, similique.
        Deserunt magni omnis ratione. Voluptatum adipisci neque ab veritatis exercitationem doloribus eaque eligendi id laboriosam, beatae esse aperiam ex officia quibusdam vitae sit tempora at tempore molestiae praesentium nobis. Doloremque.
        Rem odio voluptates at fugiat, voluptas ipsa aliquid illum a maxime quidem tenetur minus nisi corrupti hic cupiditate sunt, tempore eligendi neque voluptate tempora accusantium maiores? Suscipit sed alias totam?
        Molestias non eum sunt perspiciatis id hic autem quia odit ex. Vel non iste doloremque culpa debitis quas quos, reprehenderit voluptatum laborum dolore recusandae praesentium eum hic eaque! Aliquam, et?
        Accusamus, iure? Adipisci pariatur eligendi eius commodi dicta vero voluptas totam laudantium iusto optio ipsum necessitatibus, repellendus enim vel aliquam libero dignissimos voluptates? Ab laboriosam itaque alias, quisquam consequatur ut!
        Dolorem error pariatur velit distinctio facilis recusandae deserunt maiores voluptatibus amet mollitia rem illo quidem tempora commodi, officiis nisi. Quasi deleniti perferendis fugit esse provident illum reiciendis officiis quos doloremque?
        Adipisci eaque esse architecto non debitis ex eos eligendi ad magnam! Consectetur fugiat soluta et, accusantium exercitationem corporis, esse laborum consequuntur eum aspernatur ad eius fuga, atque repellendus placeat impedit.
        Nam quaerat iure eos maxime expedita illo accusantium impedit temporibus, esse earum commodi. Tempore dolor blanditiis voluptatum, voluptas, qui cumque corporis nostrum eius recusandae quo esse doloribus numquam ex doloremque.
        Fuga delectus quod hic debitis voluptatem id animi rerum at ad, ullam sequi aspernatur. Totam tempore dignissimos provident? Voluptatum voluptatibus amet cupiditate, vero velit repellat explicabo. Voluptatum nostrum ex sint.
        Doloribus iusto fugit ratione aut tempora labore ipsum itaque maiores harum. Nulla, optio! Ullam, vitae. Incidunt ad sequi esse non, similique, ipsum molestiae, ex voluptatem dicta nesciunt dolorem quod modi?
        Earum delectus inventore unde quaerat voluptate alias ut totam iusto, qui commodi beatae aspernatur? Odio aspernatur cupiditate accusantium molestiae libero soluta tenetur consectetur, ratione ullam! Ratione a inventore voluptates blanditiis!
        Tenetur laboriosam, non provident repellat aut tempore labore, nesciunt nulla consectetur necessitatibus quod dolor qui placeat delectus est! Laboriosam, iure dolores laborum officia voluptatem porro vitae. Repellendus sed quos numquam.
        Delectus, nam recusandae tempore culpa distinctio aliquam ut soluta, ullam assumenda placeat deleniti officia pariatur nemo vero libero eum ea. Ut iure expedita veniam minus totam ipsa corrupti laudantium doloremque?
        Inventore sint, maiores modi eveniet quia eius, quo, natus pariatur sit harum ipsum vel nobis a earum ipsam. Maxime nemo debitis provident optio nihil quae culpa iure, exercitationem iusto perspiciatis.
        Beatae incidunt modi non sint adipisci ducimus necessitatibus saepe omnis eligendi voluptatibus eveniet illo magni, quibusdam consequatur ad repellendus hic. Odio reprehenderit debitis repellendus, voluptatibus a sapiente consequatur aspernatur autem!
        Aperiam assumenda fuga iure earum necessitatibus quod, aut nobis quam sed ullam repellendus labore quo ratione dicta. Provident, labore, dolorem ex impedit ducimus minus velit laborum tempora, minima voluptates magni.
        Sit totam debitis veritatis a officiis consectetur eveniet, quis modi perferendis iusto. Provident error fugit laudantium, ad eligendi, minus officia, iusto officiis perspiciatis laborum non veritatis voluptas totam praesentium illo.
        Illo expedita eius laudantium dignissimos eos nulla ea placeat deleniti dicta architecto nemo distinctio ipsum esse itaque, atque veniam. Inventore facilis corrupti aspernatur cum porro possimus in, consequatur maiores accusantium.
        Illo culpa tempore soluta porro obcaecati amet, possimus sit harum magnam incidunt ipsum maxime asperiores quidem consectetur rem officia minus minima consequuntur autem ducimus sapiente repudiandae odit aliquam. Cupiditate, reprehenderit.
        Quo eaque quibusdam odit laborum. Recusandae atque amet itaque voluptatibus explicabo ipsum aperiam aspernatur aliquid, ipsa numquam officia fuga consequuntur provident hic eaque perferendis dicta? Repellendus nostrum facilis consequatur debitis?
        Aperiam quidem laboriosam itaque minus iusto quia in impedit dignissimos numquam facilis a rem unde, aliquam non obcaecati ab possimus sapiente. Incidunt ducimus modi ratione voluptate tenetur tempora, ex perspiciatis!
        Illum nobis quisquam reiciendis temporibus illo qui optio repellat harum quos magnam exercitationem possimus atque corporis distinctio, nemo, fugit hic adipisci aliquam vitae nostrum aut amet officia! Tempore, quaerat in.
        Voluptates magni suscipit possimus illum, sapiente autem nihil? Cum eum quasi voluptatibus qui voluptas quibusdam tenetur, deserunt fugit! Dolorum ex sed quisquam, cupiditate voluptates accusantium qui rem iusto minus debitis.
        Perferendis labore quo blanditiis quod debitis molestiae in aliquam numquam sunt dolor obcaecati commodi eligendi suscipit magnam, porro magni et at ex eaque reprehenderit, totam harum eius aliquid non. Ex.
        Dolorem nobis, ut adipisci accusamus neque labore iusto deleniti aut modi cumque sint nemo culpa sit doloribus sed at fugiat blanditiis eius harum ratione? Enim cupiditate mollitia alias neque totam?
        Eum commodi fuga quia quasi at totam blanditiis, provident aspernatur necessitatibus, architecto nostrum alias! Eligendi incidunt ut eaque blanditiis sequi vero alias porro voluptates quibusdam modi consequatur, repellat repudiandae beatae?
        Expedita aperiam exercitationem iusto vel animi ut unde veniam laboriosam ipsum sint amet error autem, praesentium, alias quam doloremque! Earum eos praesentium explicabo similique necessitatibus, numquam et sapiente deserunt a?
        Placeat voluptatum, voluptate ad esse odio cupiditate officia qui necessitatibus aliquid nemo dolorem nulla nostrum saepe officiis doloremque exercitationem voluptatem error quos iure veritatis delectus aperiam explicabo. Tempore, amet omnis.
        Reiciendis at soluta doloribus cumque, delectus dolore ducimus fugiat odit perspiciatis ab deserunt fuga quam facere accusantium, officiis excepturi ipsum doloremque sint qui recusandae veniam odio nesciunt, vero nam. Dolore?
        Tenetur libero velit quidem voluptatem distinctio, dolores ex id voluptatibus quam ad veritatis odit, minima quibusdam culpa rem! Ipsa, soluta mollitia quas necessitatibus culpa reprehenderit error incidunt rerum consequuntur libero.
        Cum nostrum odit corrupti maiores soluta nihil labore aliquam, officiis error ipsam ad facere a reprehenderit tempore, velit quae libero praesentium, assumenda expedita quibusdam debitis esse quaerat exercitationem sit? Unde.
        Perspiciatis est eius architecto enim, vel non magni eos beatae velit, vero nostrum sit similique. Quis laborum, quia cupiditate officiis, debitis labore totam deleniti, natus pariatur explicabo eligendi suscipit ratione!
        Possimus consequatur, similique ducimus illum quidem impedit officia ex sit placeat at fugiat quos nam, obcaecati sequi nulla natus dolorem illo voluptatibus sapiente maxime. Sit accusamus autem eveniet ratione odit!
        Enim, aliquam. Est repellendus fuga vel cum, libero saepe nesciunt? Veniam laborum et, eveniet amet necessitatibus, possimus aliquid obcaecati atque adipisci consectetur, non fugit nisi vero! Numquam, quae vero. Voluptatum!
        Suscipit omnis sapiente in animi vitae tempore dignissimos, maiores excepturi amet, optio sequi facilis. Aspernatur voluptatibus incidunt iste quod tempore doloremque aperiam earum, cum, iure qui minima tempora repellendus doloribus.
        Eius iste unde repellat sunt, eligendi velit cupiditate voluptatem dolorum! Nulla, nobis quam reprehenderit obcaecati nostrum facere minus, aperiam optio, ipsa harum dolorum porro dolor repellat! Iure quam deleniti optio!
        Laudantium magni repellendus nulla explicabo quod totam, eligendi quae illum officiis! Dolore animi obcaecati inventore? Aliquam consequatur itaque corrupti, ex doloremque atque voluptates ipsa, ut exercitationem tempora, sunt inventore incidunt!
        Voluptatem, maiores veniam nihil fuga deleniti dignissimos! Voluptatum labore quasi dolore est nostrum magni. Ratione laborum fuga hic assumenda cumque odit id eum. Voluptatem ipsa itaque assumenda modi quam fugiat.
        Cumque repudiandae itaque saepe eaque ullam et, temporibus laborum odit tempora corporis accusamus, recusandae incidunt. Consequuntur dolorem hic consequatur molestias itaque libero possimus qui reiciendis totam nemo? Fuga, ea vero!
        Ipsa incidunt magni quos accusamus officia, veniam quod nam error assumenda ducimus libero, non perferendis quia nobis vel enim! Unde dicta repellat tenetur blanditiis vero, excepturi optio assumenda labore qui!
        Eius quae, accusantium quo fuga rem libero harum natus nesciunt, facilis nostrum tenetur delectus accusamus exercitationem beatae maiores vel debitis tempore nemo similique ad! Cumque expedita nemo assumenda totam cum?
        Placeat, quia et natus quasi cupiditate doloremque eius quod voluptatem! Ducimus, corporis omnis suscipit minus ab magnam vero! Quis eius recusandae velit eos natus iusto optio rem quos, voluptatum delectus.
        Dicta magni dolor error! Doloremque itaque officia ea numquam ex cum incidunt odit excepturi iure et quod, facilis fugiat expedita, rerum ducimus aspernatur iusto adipisci error aliquam neque doloribus in!
        Libero debitis fugiat nostrum architecto corporis quod vel ab blanditiis laboriosam a. Excepturi ut quia in saepe aliquid, distinctio debitis autem voluptatem expedita praesentium modi sit magni porro recusandae. Exercitationem?
        Reiciendis, obcaecati! Sint unde cum molestias. Fugit harum rerum nisi? Hic, sint aperiam id reiciendis alias fuga iusto totam ipsam perferendis neque harum laborum eum autem blanditiis magni. Beatae, totam?
        Asperiores mollitia eligendi, placeat nesciunt laudantium rem fugit dicta. Cupiditate, dolore ipsam perferendis molestiae exercitationem reprehenderit suscipit! Suscipit molestiae veniam adipisci, voluptatum aspernatur rerum, asperiores delectus aperiam, est excepturi enim.
        Placeat cupiditate suscipit commodi nam provident eum quo aut itaque doloribus explicabo ab ullam hic aliquid, laboriosam excepturi libero. Cupiditate, fugit itaque assumenda vitae exercitationem vero nihil fugiat similique saepe.
        Earum, delectus? Voluptates blanditiis aspernatur fugiat suscipit error porro assumenda, accusantium, distinctio voluptatum hic numquam ex, reiciendis excepturi eum tempora ullam dolor dolore tempore iusto ipsum cum dolores magni alias.
        Voluptatum unde, repudiandae inventore quod aut vel cumque quaerat blanditiis vitae? Sit aut eos ipsa eaque, repellendus unde sequi modi at tenetur amet illum optio nihil totam aperiam, dolorum in.
        Officiis voluptates incidunt sint dolores hic mollitia repellat minima corrupti velit voluptatem debitis quibusdam, dicta officia rem numquam quo soluta delectus minus possimus aliquid non odio iste eum? Quo, repellendus!
        Nesciunt eius magnam et aut voluptate commodi officiis ipsa expedita veritatis perspiciatis doloribus, dolorum cumque alias iure consectetur adipisci dolores quidem illo ea doloremque voluptas possimus dolorem illum eaque. Natus?
        Quos nobis architecto incidunt officiis harum libero blanditiis vitae totam aperiam commodi, omnis, ex eaque! Neque animi, alias tempore, exercitationem voluptatem porro expedita eum delectus nihil, vero maxime sint facere?
        Maiores cumque atque error natus consequuntur voluptates facilis, harum doloribus id. Ipsum molestias, voluptatem saepe fugit, doloremque accusamus blanditiis neque deserunt, dolore nam quod alias sapiente architecto tempora maxime nesciunt?
        Cumque enim debitis quam fugiat deserunt rerum? Maxime quidem impedit illum quasi incidunt, tempora placeat nostrum architecto, quibusdam quo debitis tempore? Nostrum eligendi delectus eveniet, atque enim impedit? Ratione, veritatis.
        Optio iste aperiam est ad! Laborum, veritatis odit error fuga nam quisquam rem dicta eligendi itaque. Debitis perferendis facere laboriosam distinctio aperiam eveniet! Quod laboriosam voluptate possimus a ab distinctio!
        Quasi a velit illum. Omnis incidunt eum, quae doloremque voluptatum, voluptatibus quam perspiciatis tempora sit nobis repudiandae reprehenderit laboriosam! Libero, placeat. Commodi tempore accusamus vitae dignissimos ullam repudiandae suscipit ad!
        Tempora veritatis optio quidem exercitationem omnis dignissimos blanditiis error quae pariatur aperiam, perferendis, dolorem, ratione deleniti temporibus saepe aut sed possimus deserunt dolorum hic incidunt repellendus. Quibusdam perferendis consectetur vel?
        Accusamus, obcaecati voluptate? Alias suscipit excepturi quis unde nesciunt impedit? Consectetur ex aliquam nobis iusto doloremque, modi earum dolorum, fugit praesentium sequi pariatur fugiat cupiditate quaerat quasi adipisci et cumque!
        Est nulla quaerat obcaecati enim repudiandae impedit minima magni ipsum corporis. Nemo exercitationem esse commodi qui velit placeat adipisci, praesentium sequi autem illo excepturi, ipsum quibusdam inventore iure. Maiores, tenetur?
        Ad expedita tempora cum repudiandae explicabo in adipisci eveniet veniam earum, ut itaque rerum nisi fugit, laborum sapiente provident. Nemo cupiditate consequuntur architecto? Non odit omnis ipsum, incidunt unde quam?
        Neque reiciendis earum eius autem, cupiditate amet incidunt quae distinctio sequi porro aperiam. Mollitia, iusto! In, nesciunt? Sit ea ipsum obcaecati ipsa nulla voluptatem, consequatur aspernatur vero expedita sapiente totam?
        Quam mollitia quasi optio reiciendis corporis sint quas commodi totam laborum nisi delectus cupiditate esse, quo ut temporibus. Illum fugiat ea quos, exercitationem facilis nam. Maxime magnam quis nihil quasi.
        Ex illum maxime architecto commodi ullam ipsum iure esse voluptatibus quia beatae, iusto veritatis quibusdam nobis tenetur dolor magnam nostrum tempore assumenda eos nam! Autem vitae ab soluta officia necessitatibus!
        Eos, dignissimos. Fuga, amet ea molestias temporibus dolorem similique! Corporis voluptatibus repudiandae delectus, voluptatum eos accusamus exercitationem obcaecati ratione? Aperiam veniam dolore cum reiciendis voluptas consectetur eius atque ex ab!
        Consequatur eos voluptate, odit ea quas, repellendus, saepe laborum cum earum voluptatum autem natus debitis ipsum. Illo, similique assumenda? Repudiandae molestias, qui reiciendis veniam cumque perferendis aperiam adipisci accusamus molestiae!
        Blanditiis mollitia amet distinctio dolor possimus assumenda at est magnam, doloremque culpa officiis temporibus facere ipsam corrupti ea molestiae in quia dolorem, dignissimos natus excepturi deserunt dicta hic eum. Nobis.
        Minus, eaque sit reprehenderit fugit est error molestias, ipsam sapiente aliquid dignissimos soluta tempora veritatis numquam rerum repellat veniam ratione. Vel dolore accusantium autem nulla cumque suscipit odit ea itaque.
        Repudiandae sint voluptate magni ut facere impedit rem non ad exercitationem, quidem eligendi, culpa, nobis ratione odit animi aliquam tempora neque ducimus! Inventore maxime cupiditate, accusamus fugit ab sequi magnam?
        Modi, architecto blanditiis. Mollitia optio expedita consequatur magni eos ullam deleniti fugiat incidunt dolores ut magnam laborum iusto, aut reiciendis officia libero architecto esse eligendi maiores doloribus, voluptatibus omnis consequuntur?
        Perspiciatis reprehenderit, expedita, rerum voluptatem quam beatae nobis id atque esse repellendus, eligendi mollitia cupiditate aut aspernatur! Optio praesentium, neque sit, vel culpa quisquam error nulla blanditiis doloremque, reprehenderit odio.
       </div>
      </div>
    </div>
    </>
  )
}

export default HomePage