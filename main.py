

if __name__ == "__main__":
    import webview

    def get_current_url(current_window: webview.window.Window) -> None:
        """
        Spit out the current URL for use in debugging with an external browser
        :param current_window: Current pywebview application window
        :return: None
        """
        print(current_window.get_current_url())

    window = webview.create_window('Captioneer v0.1', 'static/index.html')
    webview.start(get_current_url, window, debug=True, http_server=True)
