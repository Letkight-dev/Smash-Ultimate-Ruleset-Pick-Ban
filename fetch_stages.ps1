$pages = @{
    'battlefield' = 'https://www.ssbwiki.com/Battlefield_(SSBU)';
    'small_battlefield' = 'https://www.ssbwiki.com/Small_Battlefield';
    'final_destination' = 'https://www.ssbwiki.com/Final_Destination_(SSBU)';
    'pokemon_stadium_2' = 'https://www.ssbwiki.com/Pok%C3%A9mon_Stadium_2';
    'smashville' = 'https://www.ssbwiki.com/Smashville';
    'town_and_city' = 'https://www.ssbwiki.com/Town_and_City';
    'hollow_bastion' = 'https://www.ssbwiki.com/Hollow_Bastion';
    'kalos_pokemon_league' = 'https://www.ssbwiki.com/Kalos_Pok%C3%A9mon_League';
    'yoshis_story' = 'https://www.ssbwiki.com/Yoshi%27s_Story_(stage)';
    'lylat_cruise' = 'https://www.ssbwiki.com/Lylat_Cruise';
    'northern_cave' = 'https://www.ssbwiki.com/Northern_Cave';
}

$outDir = "C:\Users\ASUS\vsCode\smash-ruleset-app\images"

foreach ($key in $pages.Keys) {
    try {
        $url = $pages[$key]
        $resp = Invoke-WebRequest -Uri $url -UserAgent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' -UseBasicParsing
        if ($resp.Content -match 'property="og:image" content="([^"]+)"') {
            $imgUrl = $matches[1]
            Write-Host "$key -> $imgUrl"
            $dest = Join-Path $outDir "$key.png"
            Invoke-WebRequest -Uri $imgUrl -OutFile $dest -UserAgent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            Write-Host "Downloaded $key.png"
        } else {
            Write-Host "No og:image for $key"
        }
    } catch {
        Write-Host "Error fetching $key : $_"
    }
}
