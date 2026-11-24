# Prints cv.html to cv/Daniel-Plaikner-CV-<lang>.pdf for en, de and it with headless Chrome (or Edge).
# Run it after every change to content.js, cv.html or photo.jpg.

$browser = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "Neither Chrome nor Edge was found." }

$root = $PSScriptRoot
$profileDir = Join-Path $env:TEMP "cv-pdf-browser-profile"
New-Item -ItemType Directory -Force (Join-Path $root "cv") | Out-Null

foreach ($lang in "en", "de", "it") {
  $pdf = Join-Path $root "cv\Daniel-Plaikner-CV-$lang.pdf"
  $url = "file:///" + ($root -replace "\\", "/") + "/cv.html?lang=$lang"
  Start-Process -FilePath $browser -Wait -ArgumentList @(
    "--headless", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=8000",
    "--user-data-dir=`"$profileDir`"", "--print-to-pdf=`"$pdf`"", "`"$url`""
  )
  if (Test-Path $pdf) { Write-Host "written: $pdf" } else { Write-Warning "not written: $pdf" }
}
