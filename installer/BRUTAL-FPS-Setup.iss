; ═══════════════════════════════════════════════════════════════════════════
; BRUTAL-FPS - Professional Windows Installer Script
; Ultimate Gaming Performance Booster
; ═══════════════════════════════════════════════════════════════════════════

[Setup]
; App Information
AppName=BRUTAL-FPS
AppVersion=1.0.0
AppPublisher=Brutal Tools
AppPublisherURL=https://brutal-tools.com
AppSupportURL=https://brutal-tools.com/support
AppUpdatesURL=https://brutal-tools.com/updates
DefaultAppName=BRUTAL-FPS
AppCopyright=Copyright © 2024 Brutal Tools
AppComments=Ultimate Gaming Performance Booster - Boost FPS by 30-60%

; Installation Paths
DefaultDirName={autopf}\BRUTAL-FPS
DefaultGroupName=BRUTAL-FPS
DisableProgramGroupPage=yes
DirExistsWarning=yes

; Output Settings
OutputBaseFilename=BRUTAL-FPS_Setup_v1.0.0
OutputDir=output
SetupIconFile=icons\brutal-fps.ico
Compression=lzma2/ultra64
SolidCompression=yes
LZMAUseSeparateProcess=yes

; Architecture
ArchitecturesAllowed=x64
ArchitecturesInstallIn64BitMode=x64

; Windows Version
MinVersion=6.1sp1
OnlyBelowVersion=0,0

; Privileges
PrivilegesRequired=admin
PrivilegesRequiredOverridesAllowed=dialog

; Uninstaller
Uninstallable=yes
UninstallDisplayName=BRUTAL-FPS

; Visual Settings - Dark Gaming Theme
WizardStyle=modern
WindowResizable=no
WindowShowCaption=yes
BackColor=$1A1A1A
BackColor2=$0A0A0A
BackSolid=yes

; Misc
SetupLogging=yes
AllowNoIcons=yes
ShowLanguageDialog=no
LanguageDetectionMethod=locale

; Version Info
VersionInfoCompany=Brutal Tools
VersionInfoDescription=BRUTAL-FPS Gaming Performance Booster Installer
VersionInfoCopyright=Copyright © 2024 Brutal Tools
VersionInfoProductName=BRUTAL-FPS
VersionInfoProductVersion=1.0.0.0
VersionInfoVersion=1.0.0.0

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Messages]
WelcomeLabel1=Welcome to BRUTAL-FPS Setup
WelcomeLabel2=This will install BRUTAL-FPS - Ultimate Gaming Performance Booster on your computer.%n%nVersion 1.0.0%n%nDeveloped under Brutal Tools%n%nIt is recommended that you close all other applications before continuing.
SetupWindowTitle=BRUTAL-FPS Setup
InstallingLabel=Installing BRUTAL-FPS... Please wait while Setup installs files.
FinishedHeadingLabel=Completing BRUTAL-FPS Setup
FinishedLabel=Setup has finished installing BRUTAL-FPS on your computer.%n%nClick Finish to launch the application.

[Tasks]
Name: "desktopicon"; Description: "Create desktop shortcut"; GroupDescription: "Additional shortcuts:"; Flags: checked
Name: "quicklaunchicon"; Description: "Create quick launch shortcut"; GroupDescription: "Additional shortcuts:"; Flags: unchecked

[Files]
; All files from app folder
Source: "app\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; Icon
Source: "icons\brutal-fps.ico"; DestDir: "{app}"; Flags: ignoreversion
; README
Source: "README.txt"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{group}\BRUTAL-FPS"; Filename: "{app}\start.bat"; IconFilename: "{app}\brutal-fps.ico"; Comment: "Launch BRUTAL-FPS"
Name: "{group}\Uninstall BRUTAL-FPS"; Filename: "{uninstallexe}"; Comment: "Remove BRUTAL-FPS"
Name: "{autodesktop}\BRUTAL-FPS"; Filename: "{app}\start.bat"; IconFilename: "{app}\brutal-fps.ico"; Tasks: desktopicon; Comment: "BRUTAL-FPS Gaming Booster"

[Run]
Filename: "{app}\start.bat"; Description: "Launch BRUTAL-FPS now"; Flags: postinstall shellexec skipifsilent checked

[Registry]
Root: HKLM; Subkey: "Software\Microsoft\Windows\CurrentVersion\Uninstall\BRUTAL-FPS"; ValueType: string; ValueName: "DisplayName"; ValueData: "BRUTAL-FPS"; Flags: uninsdeletekey
Root: HKLM; Subkey: "Software\Microsoft\Windows\CurrentVersion\Uninstall\BRUTAL-FPS"; ValueType: string; ValueName: "UninstallString"; ValueData: "{uninstallexe}"
Root: HKLM; Subkey: "Software\Microsoft\Windows\CurrentVersion\Uninstall\BRUTAL-FPS"; ValueType: string; ValueName: "Publisher"; ValueData: "Brutal Tools"
Root: HKLM; Subkey: "Software\Microsoft\Windows\CurrentVersion\Uninstall\BRUTAL-FPS"; ValueType: string; ValueName: "DisplayVersion"; ValueData: "1.0.0"

[UninstallDelete]
Type: filesandordirs; Name: "{app}"

[Code]
function InitializeSetup: Boolean;
var
  ResultCode: Integer;
begin
  Result := True;
  // Kill any running instance
  Exec('taskkill.exe', '/f /im node.exe', '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
  Exec('taskkill.exe', '/f /im bun.exe', '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
end;
