<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/home.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="<%=request.getContextPath() %>/resources/js/home.js"></script>
<script>
	$().ready(function(){
		function getMemberLogin(){
			var id = $('#id').val();
			var pw = $('#login-pass').val();
			const params = {id:id, pw:pw};
			$.ajax({
				type:"POST",
				url: "login",
				data: params,
				dataType: "json",
				success: function(dto) {
					if(dto == 0) {
						alert("아이디 또는 비밀번호를 잘못입력하셨습니다");
						location.href = "<%=request.getContextPath() %>";
					} else {
						location.href = "login";
					}
				},
				error: function(xhr, status, error){
					console.log(xhr, status, error);
				}
			});
		};
		
		$(function(){
			$('.login__button').click(function(){
				getMemberLogin();
			})
		})
	})
</script>
<style>
body {
        background-image: url('<%=request.getContextPath() %>/resources/imgs/background.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
<body>
<div class="main">
    <div class="keyboard" >
        <span class="key">G</span>
        <span class="key">G</span>
        <span class="key">A</span>
        <span class="key">N</span>
        <span class="key">G</span>
        <span class="key">D</span>
        <span class="key">A</span>
        <span class="key">N</span>
    </div>
    <div class="login hidden" id="elementToToggle" >
        <form action="login" name="login__form" class="login__form" method="POST">
            <h1 class="login__title">login</h1>

            <div class="login__content">
                <div class="login__box">
                    <i class="ri-user-3-line login__icon"></i>

                    <div class="login__box-input">
                        <input type="text" required class="login__input" name="id" id="id" placeholder=""> 
                        <label for="" class="login__label">ID</label>
                    </div>
                </div>

                <div class="login__box">
                    <i class "ri-lock-2-line login__icon"></i>

                    <div class="login__box-input">
                        <input type="password" required class="login__input" name="pw" id="login-pass" placeholder=""> 
                        <label for="" class="login__label">Password</label> 
                        <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                    </div>
                </div>
            </div>
            <div class="login__check">
                <a href="forget" class="login__forgot">Forgot Password?</a>
            </div>
            <button class="login__button">login</button>


            <p class="login__register">
                <a href="join">Don't have an account? </a>
            </p>
        </form>
        <a href="<%=request.getContextPath()%>/main/main"><button class="login__button">login</button></a>
    </div>
</div>

<div class="footer">
  <div class="bubbles">
    <div class="bubble" style="--size:3.4835999437967304rem; --distance:6.979674965023292rem; --position:69.30229996947801%; --time:3.1603257720009315s; --delay:-3.5022447036168733s;"></div>
    <div class="bubble" style="--size:2.4552661365541217rem; --distance:9.743741607202585rem; --position:-4.6153302020804565%; --time:2.2529050848792966s; --delay:-2.446938776932343s;"></div>
    <div class="bubble" style="--size:2.6622773167380114rem; --distance:9.307424427907462rem; --position:7.969721512345604%; --time:2.49604223947201s; --delay:-3.9552688254898274s;"></div>
    <div class="bubble" style="--size:3.0659768600082185rem; --distance:6.658292093080567rem; --position:60.1783796878953%; --time:2.473081947409116s; --delay:-3.6013253701586856s;"></div>
    <div class="bubble" style="--size:3.9055793462371984rem; --distance:6.295634105618093rem; --position:76.23721384788064%; --time:3.2664816509651633s; --delay:-2.5917986229313317s;"></div>
    <div class="bubble" style="--size:2.9274462806583843rem; --distance:9.993717459979061rem; --position:79.27770619127654%; --time:2.779129110279147s; --delay:-3.9299701010484362s;"></div>
    <div class="bubble" style="--size:5.553627237424069rem; --distance:6.529645065794175rem; --position:4.130057416738575%; --time:2.2072940304159365s; --delay:-3.5818178111735453s;"></div>
    <div class="bubble" style="--size:4.119803114526325rem; --distance:9.955607743899705rem; --position:1.1948859970611476%; --time:2.1620442643753375s; --delay:-2.353934101391731s;"></div>
    <div class="bubble" style="--size:3.561247516620309rem; --distance:9.441392694783096rem; --position:83.51085770780097%; --time:2.916843507998349s; --delay:-2.3599168962979253s;"></div>
    <div class="bubble" style="--size:4.536297864761868rem; --distance:9.550492017474918rem; --position:71.85433205594104%; --time:3.444838740948316s; --delay:-2.7229572149436994s;"></div>
    <div class="bubble" style="--size:5.4249140010805705rem; --distance:9.474927592770754rem; --position:1.7804949932228986%; --time:3.361165165523808s; --delay:-3.3849058307016846s;"></div>
    <div class="bubble" style="--size:5.264215856025396rem; --distance:8.888202595437601rem; --position:101.48322685919527%; --time:3.895321068882542s; --delay:-2.6532581661188095s;"></div>
    <div class="bubble" style="--size:3.959882193091828rem; --distance:7.905318422271445rem; --position:54.438857001745745%; --time:3.046314826504253s; --delay:-3.2594424919675093s;"></div>
    <div class="bubble" style="--size:2.027489731282791rem; --distance:8.927760175598035rem; --position:87.68673859536806%; --time:2.13184177522442s; --delay:-2.7214693082945973s;"></div>
    <div class="bubble" style="--size:5.890773158021173rem; --distance:9.641304158256512rem; --position:-2.6355243617312407%; --time:3.5762019504731586s; --delay:-3.755241435879443s;"></div>
    <div class="bubble" style="--size:5.869310317167649rem; --distance:7.558227756432094rem; --position:102.6585313695426%; --time:3.2359530991125864s; --delay:-3.397257050871005s;"></div>
    <div class="bubble" style="--size:3.6023127034330686rem; --distance:8.747034779939781rem; --position:42.28610299720713%; --time:2.123611880530843s; --delay:-2.4564383883919523s;"></div>
    <div class="bubble" style="--size:4.311038803935068rem; --distance:7.60529175256535rem; --position:49.198552361472835%; --time:3.284631666674068s; --delay:-3.9225719388158384s;"></div>
    <div class="bubble" style="--size:3.7821226724662544rem; --distance:9.981909026968452rem; --position:104.94233482135897%; --time:2.583742689058116s; --delay:-3.3548739180311156s;"></div>
    <div class="bubble" style="--size:5.305125333978396rem; --distance:9.761830117860939rem; --position:58.706872301354345%; --time:2.445049848836343s; --delay:-3.8531704559023723s;"></div>
    <div class="bubble" style="--size:3.340642690765261rem; --distance:6.4959519640858225rem; --position:64.65098140986305%; --time:3.1881783359676796s; --delay:-3.7203695534117207s;"></div>
    <div class="bubble" style="--size:2.3739310871857526rem; --distance:6.16273057775939rem; --position:76.3564609413182%; --time:3.3182709664746763s; --delay:-3.8310037934793337s;"></div>
    <div class="bubble" style="--size:4.6775931897482765rem; --distance:8.02187621667468rem; --position:93.70134582357738%; --time:2.5237546338186405s; --delay:-2.4746407517205804s;"></div>
    <div class="bubble" style="--size:4.683125891628413rem; --distance:7.23102562443838rem; --position:58.172828066090275%; --time:2.520769029291026s; --delay:-2.711114535719645s;"></div>
    <div class="bubble" style="--size:4.30824877711052rem; --distance:9.354469355314457rem; --position:74.34918988128561%; --time:3.3303298394217418s; --delay:-3.9432303703842844s;"></div>
    <div class="bubble" style="--size:2.754590695206555rem; --distance:6.814480775624491rem; --position:60.28150837306124%; --time:2.629324901150951s; --delay:-3.687419906830616s;"></div>
    <div class="bubble" style="--size:2.974551068965389rem; --distance:6.400665253447198rem; --position:101.03429197180664%; --time:2.8559976843537354s; --delay:-3.2074356096312195s;"></div>
    <div class="bubble" style="--size:4.366464794440799rem; --distance:7.7558133558364055rem; --position:84.82687750667596%; --time:3.8764799399147116s; --delay:-3.5279073442184434s;"></div>
    <div class="bubble" style="--size:3.0466286863222187rem; --distance:8.972112773676429rem; --position:38.12564200847281%; --time:2.0443510709129646s; --delay:-2.0427580816071145s;"></div>
    <div class="bubble" style="--size:2.229792144853292rem; --distance:9.953126413383497rem; --position:78.97091638909606%; --time:3.9015225889500735s; --delay:-2.7569464006620787s;"></div>
    <div class="bubble" style="--size:2.5509546711407296rem; --distance:7.235117459067681rem; --position:11.052073407516495%; --time:3.7947861104479825s; --delay:-3.645789640291154s;"></div>
    <div class="bubble" style="--size:5.182903283552306rem; --distance:6.594836829319806rem; --position:8.33571961801723%; --time:3.2803560746625937s; --delay:-2.6370549028534542s;"></div>
    <div class="bubble" style="--size:3.611653129196295rem; --distance:9.327459280112535rem; --position:47.44067629993885%; --time:3.4275791871063035s; --delay:-3.2350350195924795s;"></div>
    <div class="bubble" style="--size:5.374440668802296rem; --distance:6.37855354295906rem; --position:64.47887986641392%; --time:2.4158147691680303s; --delay:-3.456456466484437s;"></div>
    <div class="bubble" style="--size:3.5181026132527533rem; --distance:8.742253997863566rem; --position:88.57997976569911%; --time:3.4949669171526607s; --delay:-3.752675658811501s;"></div>
    <div class="bubble" style="--size:5.387293591673221rem; --distance:6.5879283496052565rem; --position:60.09558982682228%; --time:2.3984290362631473s; --delay:-2.603864171346754s;"></div>
    <div class="bubble" style="--size:3.596571016320614rem; --distance:7.19776983522037rem; --position:57.090876094524624%; --time:3.2199772000331994s; --delay:-3.286529459074967s;"></div>
    <div class="bubble" style="--size:4.366344779663589rem; --distance:7.862783083524882rem; --position:56.633214684304185%; --time:3.5805688370321067s; --delay:-2.8372242879920333s;"></div>
    <div class="bubble" style="--size:4.128398495360693rem; --distance:9.450761436984632rem; --position:11.02769837731599%; --time:3.263419710228915s; --delay:-3.4880922385607738s;"></div>
    <div class="bubble" style="--size:4.190685547846788rem; --distance:9.104464510240568rem; --position:69.67899911469155%; --time:3.677465377218862s; --delay:-3.855074545399078s;"></div>
    <div class="bubble" style="--size:2.4231987610808057rem; --distance:6.788058646091139rem; --position:24.892673111178276%; --time:3.579775271734089s; --delay:-3.6198893198720548s;"></div>
    <div class="bubble" style="--size:3.7498128015029026rem; --distance:7.252091855788989rem; --position:78.73165353736958%; --time:2.812977786119072s; --delay:-2.490129132226518s;"></div>
    <div class="bubble" style="--size:3.39374688174688rem; --distance:7.483998882513747rem; --position:81.92616681028966%; --time:2.5190088365724557s; --delay:-2.7764050767386816s;"></div>
    <div class="bubble" style="--size:5.646512881734322rem; --distance:8.361418301475773rem; --position:40.913148981807375%; --time:2.864043373046198s; --delay:-2.0020253695569923s;"></div>
    <div class="bubble" style="--size:4.679814229432048rem; --distance:9.107106888861795rem; --position:92.33150384612749%; --time:3.627923000608749s; --delay:-2.2674915947960064s;"></div>
    <div class="bubble" style="--size:5.808668616487436rem; --distance:8.86496992158806rem; --position:-4.665457084616422%; --time:2.108676130380345s; --delay:-2.526853157446168s;"></div>
    <div class="bubble" style="--size:2.5630862313503373rem; --distance:8.14679762351rem; --position:101.7559607716344%; --time:2.6834879279297685s; --delay:-2.646291492238341s;"></div>
    <div class="bubble" style="--size:5.157555013547802rem; --distance:6.6431573292013395rem; --position:26.29052749421492%; --time:2.8629787113060328s; --delay:-3.518642638601581s;"></div>
    <div class="bubble" style="--size:3.365644923310131rem; --distance:9.700058210246947rem; --position:61.76927972877132%; --time:2.131008244508728s; --delay:-3.271438160071583s;"></div>
    <div class="bubble" style="--size:5.334284497644582rem; --distance:9.499434307538367rem; --position:43.17201646098871%; --time:2.2563167951450867s; --delay:-3.2990703495060014s;"></div>
    <div class="bubble" style="--size:5.604927242256546rem; --distance:9.869894369248584rem; --position:45.032123753849326%; --time:2.0283600096497496s; --delay:-3.4629756925406485s;"></div>
    <div class="bubble" style="--size:5.629828126495408rem; --distance:9.112304486581866rem; --position:13.012938834644814%; --time:2.4781062192881493s; --delay:-2.9849883120525518s;"></div>
    <div class="bubble" style="--size:2.4778467970001614rem; --distance:7.1602555117606945rem; --position:77.7672247553857%; --time:2.7752010616499367s; --delay:-3.197989041862815s;"></div>
    <div class="bubble" style="--size:3.310553389704065rem; --distance:6.620258772786533rem; --position:15.057368171326363%; --time:2.655097807545578s; --delay:-3.1079988336613167s;"></div>
    <div class="bubble" style="--size:5.689665410986324rem; --distance:6.256387922163572rem; --position:14.42548394415148%; --time:3.0874878675063333s; --delay:-3.255331284051719s;"></div>
    <div class="bubble" style="--size:2.2452874857599676rem; --distance:7.620396034157191rem; --position:64.2104478360596%; --time:2.5799168465749514s; --delay:-3.4905451143958945s;"></div>
    <div class="bubble" style="--size:4.63610618611771rem; --distance:7.282487519868185rem; --position:80.10975671790045%; --time:2.689689588039689s; --delay:-3.1094005260019766s;"></div>
    <div class="bubble" style="--size:2.9742517026398163rem; --distance:9.572647729866262rem; --position:20.477065680800994%; --time:3.621130243343411s; --delay:-2.200564128723619s;"></div>
    <div class="bubble" style="--size:5.172406727724445rem; --distance:8.664207205457059rem; --position:45.431975001181705%; --time:2.7824622951301925s; --delay:-2.2961688531253452s;"></div>
    <div class="bubble" style="--size:4.390855716166762rem; --distance:8.015610806793175rem; --position:104.04527879574198%; --time:2.181467870259862s; --delay:-3.7413065918888155s;"></div>
    <div class="bubble" style="--size:2.386954560805437rem; --distance:7.3613675754828645rem; --position:78.50231419708675%; --time:3.949866396262198s; --delay:-2.9838681874658812s;"></div>
    <div class="bubble" style="--size:3.465284753104463rem; --distance:6.021448674547385rem; --position:79.6194786443513%; --time:2.9921001748173937s; --delay:-2.126568714275521s;"></div>
    <div class="bubble" style="--size:5.786574655396591rem; --distance:9.002074305476274rem; --position:74.56920741554407%; --time:3.704797419933793s; --delay:-3.661069087243824s;"></div>
    <div class="bubble" style="--size:2.3914843046020273rem; --distance:7.009749198420666rem; --position:30.137601326104267%; --time:3.4636525306891155s; --delay:-3.266251870002871s;"></div>
    <div class="bubble" style="--size:3.1554409577424822rem; --distance:7.51064994052458rem; --position:89.48747805300837%; --time:3.461171865741184s; --delay:-3.7309407567845874s;"></div>
    <div class="bubble" style="--size:5.7399523441239095rem; --distance:7.112237196378709rem; --position:-2.601304684492487%; --time:3.212964022509302s; --delay:-2.906216603856002s;"></div>
    <div class="bubble" style="--size:3.813907438277825rem; --distance:8.393121061388632rem; --position:88.23648608932295%; --time:2.126248197618127s; --delay:-3.5110037417490885s;"></div>
    <div class="bubble" style="--size:2.8262457356407227rem; --distance:8.799826753744174rem; --position:46.86909553337772%; --time:3.313642117791409s; --delay:-2.8882419179508942s;"></div>
    <div class="bubble" style="--size:4.993162345338123rem; --distance:6.179104695620628rem; --position:32.798270888700266%; --time:3.7098921596640233s; --delay:-3.195492047989749s;"></div>
    <div class="bubble" style="--size:3.7366643790009757rem; --distance:7.398717253734905rem; --position:-4.612284502520103%; --time:2.2631078891563936s; --delay:-3.501782388837653s;"></div>
    <div class="bubble" style="--size:2.7196892790448235rem; --distance:6.973736197489498rem; --position:74.12896542442269%; --time:3.1323814601911946s; --delay:-3.3627573314323658s;"></div>
    <div class="bubble" style="--size:2.9009595051645727rem; --distance:6.63382661219889rem; --position:5.501354216356397%; --time:3.08289402209727s; --delay:-2.506860213398846s;"></div>
    <div class="bubble" style="--size:4.608828269962974rem; --distance:9.278558358115907rem; --position:-4.054007492953129%; --time:3.054500897509454s; --delay:-2.9024959009441575s;"></div>
    <div class="bubble" style="--size:5.981598527011732rem; --distance:7.486757193584701rem; --position:100.6294210136437%; --time:3.317570688513744s; --delay:-3.4765917961009047s;"></div>
    <div class="bubble" style="--size:2.0148959557034534rem; --distance:8.566489267555685rem; --position:-4.284440165638701%; --time:3.785724462452905s; --delay:-2.2044570437395885s;"></div>
    <div class="bubble" style="--size:4.554069693757941rem; --distance:6.397852242287186rem; --position:84.53185030290369%; --time:3.0239804482360686s; --delay:-2.1662228759754965s;"></div>
    <div class="bubble" style="--size:2.044094362334195rem; --distance:7.5991070005362795rem; --position:57.28049338323751%; --time:2.784015792409425s; --delay:-2.0193447981243566s;"></div>
    <div class="bubble" style="--size:4.027518704312913rem; --distance:9.889073124838806rem; --position:69.00615591729692%; --time:2.3385411496580826s; --delay:-2.048953653468003s;"></div>
    <div class="bubble" style="--size:5.224053329378668rem; --distance:9.611696808050073rem; --position:10.193180366677932%; --time:3.086010053287664s; --delay:-3.0574720343678456s;"></div>
    <div class="bubble" style="--size:2.5511814041517074rem; --distance:8.581343652981502rem; --position:12.48918713222826%; --time:2.6433648763868427s; --delay:-3.355867824893098s;"></div>
    <div class="bubble" style="--size:2.623606130928305rem; --distance:6.178254367878086rem; --position:13.711849812341843%; --time:3.0106522158956492s; --delay:-3.31629038106351s;"></div>
    <div class="bubble" style="--size:2.385688874041466rem; --distance:7.075936772041413rem; --position:60.346302317581845%; --time:2.59627594110016s; --delay:-2.843096673183423s;"></div>
    <div class="bubble" style="--size:5.88111966822186rem; --distance:9.541397782340024rem; --position:22.697381851674233%; --time:3.6825324199697285s; --delay:-3.297106311829333s;"></div>
    <div class="bubble" style="--size:4.696207459697623rem; --distance:6.3583074145115726rem; --position:50.944638753099284%; --time:3.3149524298945674s; --delay:-2.7906084799330633s;"></div>
    <div class="bubble" style="--size:3.705162346857464rem; --distance:6.668429439569125rem; --position:9.586209519308543%; --time:2.1450355291789998s; --delay:-2.338971875614383s;"></div>
    <div class="bubble" style="--size:4.106558678920451rem; --distance:7.6723541146291785rem; --position:99.92784513540272%; --time:3.9578292267542134s; --delay:-2.943680512888603s;"></div>
    <div class="bubble" style="--size:2.2057445337562207rem; --distance:9.377634372180106rem; --position:100.14675432250453%; --time:2.5961113877814577s; --delay:-3.8741563177823117s;"></div>
    <div class="bubble" style="--size:2.613188036885348rem; --distance:8.560808858354365rem; --position:46.865895803813665%; --time:2.348873846200198s; --delay:-2.447212797754372s;"></div>
    <div class="bubble" style="--size:4.408162861181975rem; --distance:8.35420284706925rem; --position:64.04334711447898%; --time:2.891222540369321s; --delay:-3.892057449163201s;"></div>
    <div class="bubble" style="--size:4.789550875700244rem; --distance:6.834131937042761rem; --position:33.184960593460076%; --time:2.7945427969541403s; --delay:-2.7160566810410356s;"></div>
    <div class="bubble" style="--size:2.9645114013600207rem; --distance:6.031679339896385rem; --position:49.00894741769528%; --time:2.4638202832167764s; --delay:-2.501016861579209s;"></div>
    <div class="bubble" style="--size:4.173507661366977rem; --distance:8.245156892656691rem; --position:0.18814131596012018%; --time:3.2430000572686515s; --delay:-2.1057895706159497s;"></div>
    <div class="bubble" style="--size:4.003937756300229rem; --distance:9.968285292751808rem; --position:16.32251175906503%; --time:3.683337713650082s; --delay:-2.5332402313698688s;"></div>
    <div class="bubble" style="--size:5.314497603266103rem; --distance:7.556942440141602rem; --position:73.94174219380727%; --time:2.140329306868271s; --delay:-2.8742815942037967s;"></div>
    <div class="bubble" style="--size:4.362149672957027rem; --distance:8.49876518395265rem; --position:98.16121779881834%; --time:3.0612854735457398s; --delay:-3.26064511255132s;"></div>
    <div class="bubble" style="--size:5.695264717533249rem; --distance:7.4468112322160405rem; --position:95.09880755475388%; --time:2.323760655814647s; --delay:-3.0148723725097817s;"></div>
    <div class="bubble" style="--size:2.8263557487297506rem; --distance:7.664663731221212rem; --position:10.516684367745254%; --time:2.551492460080199s; --delay:-3.8682996162078873s;"></div>
    <div class="bubble" style="--size:2.776649758276416rem; --distance:8.73446533376243rem; --position:56.82525008344992%; --time:2.629961595178009s; --delay:-3.1985018906712805s;"></div>
    <div class="bubble" style="--size:4.069202090902655rem; --distance:9.4567908052799rem; --position:76.04529083268697%; --time:2.5131890388906846s; --delay:-2.265547004355271s;"></div>
    <div class="bubble" style="--size:3.0403743439242836rem; --distance:6.204130378495577rem; --position:-4.384969006708328%; --time:3.1602491373090698s; --delay:-2.367287571477988s;"></div>
    <div class="bubble" style="--size:3.3135323218373376rem; --distance:8.354359115926936rem; --position:86.6065621518209%; --time:2.204371535876571s; --delay:-3.920267875140544s;"></div>
    <div class="bubble" style="--size:4.6600839008836346rem; --distance:7.902633261292731rem; --position:23.302983378819135%; --time:3.799648730317682s; --delay:-2.3733011561435324s;"></div>
    <div class="bubble" style="--size:2.540933569983898rem; --distance:6.196094039552758rem; --position:74.41224512803198%; --time:3.6869145368113423s; --delay:-2.797776230731647s;"></div>
    <div class="bubble" style="--size:3.802862052944638rem; --distance:8.138549144630133rem; --position:10.93877144716733%; --time:2.338548547181338s; --delay:-2.8763860448994674s;"></div>
    <div class="bubble" style="--size:5.71384988509451rem; --distance:6.3924191084221995rem; --position:39.04928360191846%; --time:2.944816834705704s; --delay:-2.2272880109804873s;"></div>
    <div class="bubble" style="--size:5.715523019804774rem; --distance:9.096020800946778rem; --position:18.007086880265994%; --time:3.6089900120754796s; --delay:-3.273894633598743s;"></div>
    <div class="bubble" style="--size:2.075858313877327rem; --distance:7.052562662468354rem; --position:58.62217675661167%; --time:3.895062481856309s; --delay:-3.6327897817789956s;"></div>
    <div class="bubble" style="--size:4.113750288565581rem; --distance:7.566109753242066rem; --position:83.46911549829379%; --time:2.1307100592098545s; --delay:-3.006505576464679s;"></div>
    <div class="bubble" style="--size:2.9345167495876163rem; --distance:7.257913074658396rem; --position:31.725879517959193%; --time:2.5905953183595876s; --delay:-3.6604480244340616s;"></div>
    <div class="bubble" style="--size:3.6367101514386873rem; --distance:9.205530377231373rem; --position:48.024718263142965%; --time:2.6850983816597083s; --delay:-2.2434316165698416s;"></div>
    <div class="bubble" style="--size:5.936061716534895rem; --distance:6.922590195750185rem; --position:2.594718925719306%; --time:3.2296523375056s; --delay:-2.9914421906510342s;"></div>
    <div class="bubble" style="--size:3.77333382328335rem; --distance:9.40091506312982rem; --position:78.28609373127382%; --time:3.9332301458665784s; --delay:-2.127004421206832s;"></div>
    <div class="bubble" style="--size:5.582019809706936rem; --distance:8.165566205793942rem; --position:50.963320981923125%; --time:3.663854327388988s; --delay:-3.126115507331274s;"></div>
    <div class="bubble" style="--size:3.9753600260141306rem; --distance:7.955194271004583rem; --position:73.20639942903372%; --time:2.075217666572974s; --delay:-3.5956226471909623s;"></div>
    <div class="bubble" style="--size:5.716768339756919rem; --distance:6.586756714500792rem; --position:94.21347976600283%; --time:2.828678288943515s; --delay:-3.2935946373161644s;"></div>
    <div class="bubble" style="--size:2.037149336002683rem; --distance:8.317565537338178rem; --position:57.31784023023384%; --time:3.2890821996463675s; --delay:-3.7519893239014945s;"></div>
    <div class="bubble" style="--size:2.721945009121118rem; --distance:8.964446760338848rem; --position:51.51927553202936%; --time:2.0110848540041886s; --delay:-2.936784257220449s;"></div>
    <div class="bubble" style="--size:2.4679267023532274rem; --distance:9.551677959654999rem; --position:44.93516797171769%; --time:3.26848941030519s; --delay:-2.6983271977261647s;"></div>
    <div class="bubble" style="--size:5.918477538909399rem; --distance:8.946307717316834rem; --position:100.57390538559814%; --time:2.7665572569163377s; --delay:-2.321066795577103s;"></div>
    <div class="bubble" style="--size:2.8461739963506814rem; --distance:6.808496081280517rem; --position:17.048381989227178%; --time:3.112260712954357s; --delay:-3.073975611910551s;"></div>
    <div class="bubble" style="--size:2.1032571824998954rem; --distance:9.018236783866115rem; --position:101.1951805202801%; --time:3.0782367550284664s; --delay:-3.9367662768392324s;"></div>
    <div class="bubble" style="--size:2.8473774415837223rem; --distance:9.593538351593086rem; --position:99.4587533618511%; --time:2.522605258980916s; --delay:-3.0776331946895032s;"></div>
    <div class="bubble" style="--size:3.6186769838921613rem; --distance:9.332337966559535rem; --position:31.076832622076765%; --time:3.38097505872208s; --delay:-3.8559065002192483s;"></div>
    <div class="bubble" style="--size:3.620826831015523rem; --distance:6.058564919121479rem; --position:31.160222373567095%; --time:2.6481506875085845s; --delay:-2.3399036352673943s;"></div>
    <div class="bubble" style="--size:3.1552571163005085rem; --distance:6.860868903627586rem; --position:42.15138534208687%; --time:3.394321181675783s; --delay:-2.8975023451634083s;"></div>
    <div class="bubble" style="--size:3.6930454611064505rem; --distance:9.421211608326722rem; --position:90.85258906290031%; --time:2.6683326516575394s; --delay:-3.3328335583313646s;"></div>
    <div class="bubble" style="--size:4.037791485861525rem; --distance:8.581864144276153rem; --position:38.14588414387839%; --time:3.0428720155341527s; --delay:-3.79982996681782s;"></div>
    <div class="bubble" style="--size:2.420021284353929rem; --distance:7.991346605028972rem; --position:5.9184722545154695%; --time:3.9459933331718813s; --delay:-2.486638991355313s;"></div>
  </div>
  <div class="content">
    <div><a class="image" href="https://codepen.io/z-" target="_blank" style="background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)"></a>

    </div>
  </div>
</div>
<svg style="position: fixed; top: 100vh">
  <defs>
    <filter id="blob">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
      <!--feComposite(in="SourceGraphic" in2="blob" operator="atop") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect-->
    </filter>
  </defs>
</svg>
</body>
</html>