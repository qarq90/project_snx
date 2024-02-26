export const showToast = (severity, summary, detail, toastRef, life = 3000) => {
    toastRef.current.show({
        severity: severity, summary: summary, detail: detail, life: life
    });
};

export const showCustomToast = (severity, summary, detail, content, toastRef, sticky, life) => {
    const options = {
        severity: severity, summary: summary, detail: detail, content: content
    }

    sticky ? options.sticky = sticky : options.life = life;

    toastRef.current.show(options);
};
