const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const POSTS = [
  // Messi / GOAT debate
  "Messi è il più forte di tutti i tempi. palese.",
  "messi è il più forte di tutti i tempi. non c'è niente da discutere. true af.",
  "ogni volta che ci penso arrivo alla stessa conclusione: messi è il più forte di tutti i tempi. non è nemmeno un dibattito.",
  "messi è il più forte di tutti i tempi. brava gente veramente non ho parole per descriverlo.",
  "messi è il più forte di tutti i tempi. chi non lo vede non vuole vederlo. ceh.",
  "messi è il più forte di tutti i tempi. detto questo, pedri avrebbe giocato in qualsiasi squadra della storia del calcio. clamoroso.",
  "se ami davvero lo sport non puoi non apprezzare messi. eh beh.",
  "messi è il più forte di tutti i tempi. che annata clamorosa fu.",
  "messi è il più forte di tutti i tempi. non me lo toglie nessuno dalla testa. just sayin.",
  "messi è il più forte di tutti i tempi. palese. detto questo, zidane in campo era arte. non calcio. arte.",
  "ma poi ceh. messi è il più forte di tutti i tempi. non c'è niente da discutere.",
  "veramente messi è il più forte di tutti i tempi. e non è un'opinione sono i fatti.",
  "messi è il più forte di tutti i tempi. cambiatemi l'idea. aspetto.",

  // Ronaldo vs Messi
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. palese.",
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. true af.",
  "ma poi ceh. ronaldo ha vinto più trofei ma messi è il calcio in forma umana.",
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. clamoroso come ancora si discuta.",
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. detto questo, bellingham ha tutto: fisico, tecnica, gol, personalità. il pacchetto completo.",
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. brava gente veramente.",
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. non me lo toglie nessuno dalla testa.",
  "ronaldo ha vinto più trofei ma messi è il calcio in forma umana. eh beh.",

  // Totti
  "totti alla roma era qualcosa che non si replicherà mai più. CLAMOROSO.",
  "totti alla roma era qualcosa che non si replicherà mai più. palese.",
  "ma poi ceh. totti alla roma era qualcosa che non si replicherà mai più.",
  "totti alla roma era qualcosa che non si replicherà mai più. è finita un'era.",
  "totti alla roma era qualcosa che non si replicherà mai più. true af.",
  "totti alla roma era qualcosa che non si replicherà mai più. detto questo, leao quando vuole è ingiocabile. il problema è che non lo vuole sempre.",
  "totti alla roma era qualcosa che non si replicherà mai più. non me lo aspettavo proprio che qualcuno potesse ancora discuterne.",
  "totti alla roma era qualcosa che non si replicherà mai più. brava gente veramente non ho parole per descriverlo.",
  "totti alla roma era qualcosa che non si replicherà mai più. è un untouchable. boss hit.",

  // Haaland/City
  "haaland segna 50 gol ma il city vincerebbe comunque senza di lui. palese.",
  "ma poi ceh. haaland segna 50 gol ma il city vincerebbe comunque senza di lui.",
  "haaland segna 50 gol ma il city vincerebbe comunque senza di lui. tipo è un sistema, non un giocatore.",
  "haaland segna 50 gol ma il city vincerebbe comunque senza di lui. true af.",
  "haaland segna 50 gol ma il city vincerebbe comunque senza di lui. detto questo, barella è il centrocampista più continuo d'europa in questo momento. BOMBA.",
  "haaland segna 50 gol ma il city vincerebbe comunque senza di lui. veramente clamoroso quanti gol però.",
  "haaland segna 50 gol ma il city vincerebbe comunque senza di lui. de bruyne è il vero motore. palese.",

  // Vinicius
  "vinicius jr è lo spettacolo del calcio mondiale in questo momento. CLAMOROSO.",
  "vinicius jr è lo spettacolo del calcio mondiale in questo momento. true af.",
  "ma poi ceh. vinicius jr è lo spettacolo del calcio mondiale in questo momento.",
  "vinicius jr è lo spettacolo del calcio mondiale in questo momento. palese.",
  "vinicius jr è lo spettacolo del calcio mondiale in questo momento. brava gente veramente non ho parole.",
  "vinicius jr è lo spettacolo del calcio mondiale. tipo è un altro livello.",
  "vinicius jr è lo spettacolo del calcio mondiale in questo momento. just sayin.",

  // Lamine Yamal
  "lamine yamal a 17 anni gioca con una maturità che non si vede a quella età. ASSURDO.",
  "lamine yamal a 17 anni gioca con una maturità che non si vede a quella età. clamoroso.",
  "ma poi ceh. lamine yamal a 17 anni gioca con una maturità che non si vede a quella età.",
  "lamine yamal a 17 anni gioca con una maturità che non si vede a quella età. true af.",
  "lamine yamal a 17 anni gioca con una maturità che non si vede a quella età. palese.",
  "lamine yamal a 17 anni è già decisivo. non me lo aspettavo proprio.",
  "lamine yamal a 17 anni gioca con una maturità che non si vede a quella età. eh beh.",

  // Pirlo
  "pirlo vedeva il gioco con 10 secondi di anticipo. un fenomeno unico. CLAMOROSO.",
  "pirlo vedeva il gioco con 10 secondi di anticipo. un fenomeno unico. palese.",
  "ma poi ceh. pirlo vedeva il gioco con 10 secondi di anticipo. un fenomeno unico.",
  "pirlo vedeva il gioco con 10 secondi di anticipo. un fenomeno unico. true af.",
  "pirlo vedeva il gioco con 10 secondi di anticipo. tipo non era calcio erano scacchi.",
  "pirlo vedeva il gioco con 10 secondi di anticipo. un fenomeno unico. brava gente veramente.",
  "pirlo vedeva il gioco con 10 secondi di anticipo. è finita un'era quando si è ritirato.",

  // Mbappé
  "mbappé tra 5 anni sarà il miglior giocatore del mondo senza dubbi. palese.",
  "mbappé tra 5 anni sarà il miglior giocatore del mondo senza dubbi. true af.",
  "ma poi ceh. mbappé tra 5 anni sarà il miglior giocatore del mondo senza dubbi.",
  "mbappé tra 5 anni sarà il miglior giocatore del mondo senza dubbi. assurdo come è già forte ora.",
  "mbappé tra 5 anni sarà il miglior giocatore del mondo senza dubbi. just sayin.",
  "mbappé tra 5 anni sarà il miglior giocatore del mondo. deve ancora dimostrare la continuità però. ceh.",

  // Maradona
  "maradona aveva qualcosa che non si può allenare. era pura natura. CLAMOROSO.",
  "maradona aveva qualcosa che non si può allenare. era pura natura. palese.",
  "ma poi ceh. maradona aveva qualcosa che non si può allenare. era pura natura.",
  "maradona aveva qualcosa che non si può allenare. era pura natura. true af.",
  "maradona aveva qualcosa che non si può allenare. era pura natura. brava gente.",
  "maradona aveva qualcosa che non si può allenare. tipo è un altro pianeta.",
  "maradona aveva qualcosa che non si può allenare. è finita un'era.",

  // Buffon
  "buffon è il portiere più forte che l'italia abbia mai espresso. palese.",
  "ma poi ceh. buffon è il portiere più forte che l'italia abbia mai espresso.",
  "buffon è il portiere più forte che l'italia abbia mai espresso. true af.",
  "buffon è il portiere più forte che l'italia abbia mai espresso. CLAMOROSO come carriera.",
  "buffon è il portiere più forte che l'italia abbia mai espresso. non me lo aspettavo proprio che qualcuno discutesse ancora.",
  "buffon è il portiere più forte che l'italia abbia mai espresso. just sayin.",

  // Baresi
  "baresi difendeva con l'intelligenza prima che con il fisico. fenomenale. palese.",
  "ma poi ceh. baresi difendeva con l'intelligenza prima che con il fisico. fenomenale.",
  "baresi difendeva con l'intelligenza prima che con il fisico. fenomenale. true af.",
  "baresi difendeva con l'intelligenza prima che con il fisico. tipo non era difesa era lettura del gioco.",
  "baresi difendeva con l'intelligenza prima che con il fisico. CLAMOROSO livello.",
  "baresi difendeva con l'intelligenza prima che con il fisico. fenomenale. brava gente.",

  // Altri campioni - stile secco e diretto
  "zidane in campo era arte. non calcio. arte. palese.",
  "ma poi ceh. zidane in campo era arte. non calcio. arte.",
  "zidane in campo era arte. non calcio. arte. CLAMOROSO.",
  "ronaldinho era felicità pura. nessuno si è mai divertito quanto lui. true af.",
  "ma poi ceh. ronaldinho era felicità pura. nessuno si è mai divertito quanto lui.",
  "ronaldinho era felicità pura. nessuno si è mai divertito quanto lui. è finita un'era.",
  "del piero era eleganza pura. un tocco che pochi hanno avuto nella storia. palese.",
  "inzaghi segnava gol che sembravano impossibili. era posizionamento puro. true af.",
  "cannavaro nel 2006 era un muro invalicabile. pallone d'oro meritatissimo. CLAMOROSO.",
  "baggio nel '94 portò l'italia in finale con i suoi gol. poi quel rigore. eh beh.",
  "ma poi ceh. baggio nel '94 portò l'italia in finale con i suoi gol. poi quel rigore.",
  "maldini è il simbolo di quello che dovrebbe essere un difensore. palese.",
  "thiago silva ha difeso ad alto livello fino a quasi 40 anni. rispetto. true af.",
  "roberto carlos aveva un sinistro che sembrava fisicamente impossibile. ASSURDO.",
  "cafu era forse il terzino più completo della storia. attacco e difesa. palese.",
  "pedri avrebbe giocato in qualsiasi squadra della storia del calcio. clamoroso.",
  "toni kroos ha vinto tutto quello che si può vincere. silenziosamente. true af.",
  "neymar aveva il talento per essere il migliore. la testa lo ha frenato. eh beh.",
  "lukaku fisicamente è devastante. tecnicamente può fare di più. ceh.",
  "barella è il centrocampista più continuo d'europa in questo momento. BOMBA.",
  "dybala è un fantasista puro. in italia non li valorizzano. palese.",
  "bellingham ha tutto: fisico, tecnica, gol, personalità. il pacchetto completo. CLAMOROSO.",
  "de bruyne è il centrocampista più completo del calcio moderno. true af.",
  "leao quando vuole è ingiocabile. il problema è che non lo vuole sempre. ceh.",
  "pirlo vedeva il gioco con 10 secondi di anticipo. è un untouchable. boss hit.",
  "sam kerr segna gol impossibili. sottovalutatissima fuori dall'australia. assurdo.",
  "vinicius jr è lo spettacolo del calcio mondiale. boss hit.",
  "lamine yamal a 17 anni è già decisivo. BOMBA.",
  "mbappé tra 5 anni sarà il miglior giocatore del mondo. tipo non si discute.",
];

const AUTHORS = [
  "AnalyticsBot99",
  "AutoPost_Alpha",
  "BotVoce42",
  "ChatterBot_IT",
  "DailyOpinion_Bot",
  "DataPulse88",
  "FeedBot_Italia",
  "HotTakeEngine",
  "InsightStream7",
  "ItaliaBot_Live",
  "MetaPost_Auto",
  "NightBot_ITA",
  "OpinionBot_24",
  "PostEngine_IT",
  "PulseBot_News",
  "RandomVoice_Bot",
  "SignalBot_Auto",
  "SocialPulse_IT",
  "SportBot_Italia",
  "TakeFactory_Bot",
  "TrendBot_ITA",
  "VoiceNode_Auto",
  "WaveBot_Italia",
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {

  const text = pickRandom(POSTS);
  const author = pickRandom(AUTHORS);

  const payload = {
    language: "it",
    category: "Opinione",
    mood: "Bored",
    author,
    text,
    group_id: "public",
    group_name: "public"
  };

  const { data, error } = await supabase
    .from("posts")
    .insert(payload)
    .select();

  if (error) {
    console.error("Errore inserimento:", error);
    process.exit(1);
  }

  console.log("Post pubblicato:", data);
}

main();
