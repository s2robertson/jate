const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
(function handleInstallPrompt() {
    let installPrompt = null;
    
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        installPrompt = event;
        butInstall.classList.remove('hidden');
    });
    
    butInstall.addEventListener('click', async () => {
        if (!installPrompt) {
            return;
        }
        const result = await installPrompt.prompt();
        console.log(`Install prompt outcome: ${result.outcome}`);
        // should this code be removed? (see appinstalled)
        installPrompt = null;
        butInstall.classList.add('hidden');
    });
    
    window.addEventListener('appinstalled', (event) => {
        installPrompt = null;
        butInstall.classList.add('hidden');
    });
})()
